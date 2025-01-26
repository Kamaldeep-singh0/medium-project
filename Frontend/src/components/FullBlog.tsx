
import NavBar from './NavBar'
import { Avatar } from './BlogCard'
import { Blog } from '../hooks'

function FullBlog({blog}:{blog:Blog}) {
  return (
    <div>
      <NavBar/>
      <div className="flex justify-center">
      <div className='grid grid-cols-12 px-10 w-full max-w-screen-xl pt-24  '>
      <div className=' col-span-8 w-full '>
        <div className='font-extrabold text-5xl break-words'>{blog.title}</div>
        <div className='mt-2 text-lg text-slate-500'>{`Posted on January 24,2005`}</div>
        <div  className='mt-4 text-lg break-words '>{blog.content}</div>
      </div>
      <div className=' col-span-4  w-full  pl-5'>
        <div className='mt-4 text-lg '>Author</div>
        <div className=' pt-3 flex items-center'>
           <Avatar name={blog.author.name}/>
           <div className='text-2xl font-bold pl-2 break-words'>{blog.author.name}</div>
        </div>
        <div className='mt-2 pl-8 text-lg text-slate-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default FullBlog
