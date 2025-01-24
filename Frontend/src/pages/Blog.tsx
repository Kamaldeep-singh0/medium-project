import React from 'react'
import BlogCard from '../components/BlogCard'

function Blog() {
  return (
    <div className="flex justify-center h-screen">
    <div className='flex flex-col w-2/3 justify-center '>
      <BlogCard id={123} authorName="Kamaldeep" title="Hello t is a long established fact that a reader will be distracted my dear friends  iam here"
        content="Hello my dear friends  iam here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." publishedDate="17/01/2005"/>
     <BlogCard id={123} authorName="Kamaldeep" title="Hello t is a long established fact that a reader will be distracted my dear friends  iam here"
        content="Hello my dear friends  iam here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." publishedDate="17/01/2005"/>
         <BlogCard id={123} authorName="Kamaldeep" title="Hello t is a long established fact that a reader will be distracted my dear friends  iam here"
        content="Hello my dear friends  iam here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." publishedDate="17/01/2005"/>
    </div>
    </div>
  )
}

export default Blog
