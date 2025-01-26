
import { Avatar } from './BlogCard'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
      <div className='fixed border-b-2 bg-white  w-full h-14 flex items-center justify-between'>
       <Link to="/blogs"><div className='mx-10 text-2xl font-extrabold'>Medium</div>
       </Link> 
      
        <div className="mx-10 flex items-center">
          <Link to="/create">
        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mr-4 ">Post Your</button>
        </Link>
            <Avatar  name="Kamaldeep"/>
        </div>
      </div>
  
  )
}

export default NavBar
