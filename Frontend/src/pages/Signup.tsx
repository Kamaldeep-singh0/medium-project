import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='flex'>
      <div className='w-3/6 h-screen   flex flex-col items-center justify-center p-5'>
        <div className='bg-white w-2/3 h-5/6 flex flex-col items-center p-5' >
            <h1 className='text-4xl font-bold'>Create an Account</h1>
            <h3 className='text-lg text-gray-600 my-2'>Already have an account? <Link to="/signin" className='underline'>Login</Link></h3>

            <h1 className='text-xl font-medium my-2 w-full '>Name</h1>
            <input  type="text" className=' mb-2 mx-5 px-4 h-10 w-full border border-gray-300 rounded' placeholder='JohnDoe'/>

            <h1 className='text-xl font-medium my-2 w-full '>Email</h1>
            <input  type="text" className=' mb-2 mx-5 px-4 h-10 w-full border border-gray-300 rounded' placeholder='JohnDoe@gmail.com'/>

            <h1 className='text-xl font-medium my-2 w-full '>Password</h1>
            <input  type="text" className=' mb-2 mx-5 px-4 h-10 w-full border border-gray-300 rounded' placeholder='Secret'/>

            <button className='my-5 w-full h-12 bg-black rounded-md text-white text-xl font-semibold'>Sign Up</button>

        </div>
      </div>
      <div className='w-3/6 h-screen bg-slate-100  flex flex-col items-center justify-center px-20'>
        <h1 className='text-3xl font-bold w-full'>"The customer service I received was exceptional. The support team went above and beyond to address my concerns."</h1>
        <h2 className='w-full pt-3 text-lg font-semibold'>Jules Winifield</h2>
        <h3 className='w-full text-sm font-semibold text-gray-500'>CEO, Acme Inc</h3>
      </div>
    </div>
  )
}

export default Signup
