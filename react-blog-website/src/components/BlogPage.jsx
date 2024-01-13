import React, { useEffect } from 'react'
import { useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';
import Shimmer from './Shimmer';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // blogs per page
    const [selectedCategory , setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(()=>{
        async function fetchBlogs(){
            let url = 'https://blog-a8yi.onrender.com/api/blogs';

            const response  = await fetch(url);
            const data = await response.json();
            console.log(data)
            setBlogs(data);
        }

        fetchBlogs();
    },[currentPage, pageSize, selectedCategory])

    // page changing btn
    const handlePageChange = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category)=>{
     setSelectedCategory(category)
    setCurrentPage(1);
    setActiveCategory(category)
    }

    if(blogs.length===0) return <Shimmer />

  return (
    <div>
        {/* category section */}
        <div>
            <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
        </div>

        {/* blog cards section */}
        <div className='flex flex-col lg:flex-row gap-12'>
            <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory = {selectedCategory} pageSize={pageSize}/>

            <div>
                <SideBar />
            </div>
        </div>

        

        {/* pagination section */}
        <div><Pagination currentPage={currentPage} blogs = {blogs} pageSize={pageSize} onPageChange={handlePageChange} selectedCategory={selectedCategory} /></div>
    </div>
  )
}

export default BlogPage