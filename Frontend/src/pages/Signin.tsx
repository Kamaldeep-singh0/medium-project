import Auth from '../components/Auth'
import Quote from '../components/Quote'

function Signin() {
  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <Auth type="signin"/>
      <Quote/>
    </div>
    
  </div>
  )
}

export default Signin
