import React from 'react'
import BlogCard from '../components/BlogCard'
import NavBar from '../components/NavBar'
import { useBLogs } from '../hooks'

function Blogs() {
  const {loading,data} = useBLogs();
  return (
    <div>
       <NavBar/>
    <div className="flex justify-center ">
    <div className='flex flex-col w-2/3 justify-center pt-14   '>

    { loading == true? <div>loading</div> :
     <div>
         {data && data.map((blog)=>(
          <BlogCard
                    id={blog.id}
                    authorName={blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
          />))}
      </div>
    }    
    </div>
    </div>
    </div>
  )
}

export default Blogs
