import React from "react";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Pagination from "../components/Pagination";

const Home = () => {
    return (
        <div>
            <Header/>
            <div className='py-5 mx-auto max-w-[720px] px-[25px] '>
                <Blog/>
            </div>
            <Pagination/>
        </div>
    )
}

export default Home;