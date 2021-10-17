import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
const {data:blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");
    return (  
        <div>
            <h1>
                Welcome home
            </h1>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading ...</div>}
           {blogs && <BlogList blogs={blogs} title="Blog List" />}
            {/*<BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Marios Blogs" />*/}


        </div>

    );
}
 
export default Home;