import React from 'react'
import { Link } from 'react-router-dom'

interface BlogCardProps{
    id: string,
    authorName:string,
    title:string,
    publishedDate:string,
    content : string,

}

function BlogCard({id,authorName,title,content,publishedDate}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
    <div className='py-8 border-b-2'>
      <div className='flex items-center'>
         <Avatar name={authorName} />
        <div className='ml-2 text-base '>{authorName}</div>
        <div  className='ml-2 text-sm text-gray-500 '>{publishedDate}</div>
      </div>
      <div className='text-xl font-bold mt-2'>{title}</div>
      <div className='font-serif font-thin'>{content.slice(0,200)+"..."}</div>
      <div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(content.length/100)} minute(s) read`}</div>
    </div>
    
    
    </Link>
  )
}

export function Avatar({name,size = "small"}:{name:string, size?:"small"|"big"}){
    return(
        <div className='inline-flex items-center justify-center size-[28px] rounded-full bg-yellow-500 font-semibold text-black leading-none'>
           <span className={`${size === "small" ? "text-xl" : "text-md"} `}>
           {name ? name[0] : 'X'}
    </span>
        </div>
    )
}

export default BlogCard
