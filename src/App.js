import React, { useContext, useEffect } from "react";
import "./App.css"
import { AppContext } from "./context/AppContext";
import { Routes,Route, useSearchParams, useLocation } from "react-router-dom";

import Home from "./pages/Home"
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage"
import CategoryPage from "./pages/CategoryPage"

const App = ()=>{

  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      // iska matlab tag wala page show karna h
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      // iska matlab category wala page show karna h
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname,location.search]);
  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
  )
}

export default App;