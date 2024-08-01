import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import Spinner from "../components/Spinner";

const BlogPage = () =>{

    const [blog,setBlog] = useState(null);
    const [relatedBlogs,setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading,setLoading} = useContext(AppContext);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Error occured in blog id call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname]);

    return (
        <div className='py-24 max-w-2xl mx-auto'>
            <Header/>
            <div className='max-w-[720px] px-[25px] '>
                <button className='mb-6 border-2 rounded-md border-[#dfdfdf] py-1 px-4 hover:bg-[#efefef] transition-all'
                    onClick={() =>navigation(-1)}
                >
                    Back
                </button> 
                {
                    loading ? 
                    (
                        <div className="flex items-center justify-center">
                           <Spinner/>
                        </div>
                    ) : 
                    (
                        blog ? (
                            <div className='flex flex-col gap-y-10'>
                                <BlogDetails post={blog}/>
                                <h2 className='text-3xl font-bold'>Related Blogs</h2>
                                {
                                    relatedBlogs.map((post) =>(
                                        <div key={post.id}>
                                            <BlogDetails post={post}/>
                                        </div>
                                    ))
                                }
                            </div>
                        ):(<div>
                            No Blog Found
                        </div>)
                    )
                }
            </div>
        </div>
    );
}
export default BlogPage;