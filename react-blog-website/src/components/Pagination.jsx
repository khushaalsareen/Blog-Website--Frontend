import React from 'react'

const Pagination = ({currentPage,blogs,pageSize,onPageChange,selectedCategory}) => {
    const filteredBlogs = blogs.filter((blog)=>!selectedCategory || blog.category === selectedCategory)
    const totalPages =  Math.ceil(filteredBlogs.length/pageSize)
    const renderPaginationLinks = ()=>{
        return Array.from({length:totalPages}, (_,i)=>i+1).map((pageNumber)=>(
            <li className={pageNumber===currentPage ? "activerPagination": ""} key={pageNumber}>
                <a href="#" onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage===1}>Previous</button>
        </li>
        <div className='flex gap-1'>{renderPaginationLinks()}</div>
        <li>
            <button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
        </li>
    </ul>
  )
}

export default Pagination