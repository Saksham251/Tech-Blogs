import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner";
const Blog = ()=>{
    //consume
    const {posts,loading} = useContext(AppContext);
    return (
        <div className="max-w-[620px] w-11/12 py-1 flex flex-col gap-y-7 my-[100px]">
            {
                loading ? 
                (<Spinner/>) :
                (
                    posts.length===0 ? 
                    (<div>
                        <p>No Post Found</p>
                    </div>):
                    (
                        posts.map((post)=>(
                            <BlogDetails key= {post.id} post ={post}/>
                        ))
                    )
                )
            }
        </div>
    )
}
export default Blog;