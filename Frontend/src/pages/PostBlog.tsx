
import NavBar from '../components/NavBar'
import Create from '../components/Create'

function PostBlog() {
  return (
    <div>
        <NavBar/>
        <div className="flex justify-center ">
        <div className='flex flex-col w-2/3 justify-center pt-14   '>
     <Create/>
     </div>
     </div>
    </div>
  )
}

export default PostBlog
