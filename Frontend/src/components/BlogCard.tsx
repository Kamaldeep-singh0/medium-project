import React from 'react'

interface BlogCardProps{
    id: number,
    authorName:string,
    title:string,
    publishedDate:string,
    content : string,

}

function BlogCard({id,authorName,tile,content,publishedDate}: BlogCardProps) {
  return (
    <div>
      
    </div>
  )
}

export default BlogCard
