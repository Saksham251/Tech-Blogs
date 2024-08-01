import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../components/Blog";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    return (
        <div className='py-24'>
            <Header/>
            <div className='max-w-[720px] px-[25px] mx-auto'>
                <div className='mb-8 flex items-center gap-3 '>
                    <button className='border-2 rounded-md border-[#dfdfdf] py-1 px-4 hover:bg-[#efefef] transition-all'
                    onClick={() =>navigation(-1)}>
                        Back
                    </button>
                    <h2 className='font-bold'>Blogs On</h2><span className="bg-gradient-to-r from-sky-300 to-indigo-600 py-1 px-4 border-2 rounded-md">{category}</span>
                </div>
                <Blog/>
            </div>
            <Pagination/>
        </div>
    );
}

export default CategoryPage;