import React from 'react'
import Auth from '../components/Auth'
import Quote from '../components/Quote'

function Signup() {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <Auth type="signup"/>
        <Quote/>
      </div>
      
    </div>
  )
}

export default Signup

