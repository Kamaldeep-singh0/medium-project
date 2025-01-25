import React from 'react'
import { Avatar } from './BlogCard'

function NavBar() {
  return (
      <div className='fixed border-b-2 bg-white  w-full h-14 flex items-center justify-between'>
        <div className='mx-10 text-2xl font-extrabold'>Medium</div>
        <div className="mx-10">
            <Avatar  name="Kamaldeep"/>
        </div>
      </div>
  
  )
}

export default NavBar
