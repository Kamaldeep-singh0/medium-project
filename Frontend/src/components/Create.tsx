import axios from 'axios';
import  { useState } from 'react'
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const navigate = useNavigate();
  return (
    <div>
      <div className='py-8'>
      <div className='flex flex-col items-center '>
           <textarea 
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            placeholder='Title...' 
            className='text-3xl w-full font-semibold border border-gray-300 outline-none bg-gray-100 p-2 rounded'/>
           <textarea
             onChange={(e)=>{
              setDescription(e.target.value)
             }}  
             placeholder='Tell your story...' 
             className='text-2xl pb-60  w-full font-semibold border border-gray-300 outline-none bg-gray-100 p-2 rounded mt-3 '/>
           <button 
             onClick={async ()=>{
              const res = await axios.post(`${BACKEND_URL}/api/v1/blog/`,{
                title,
                content :description
             },{
              headers:{
                authorization: `Bearer ${localStorage.getItem("token")}`
              }
             });
            navigate(`/blog/${res.data.id}`);
              
             }}
             type="button" 
             className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mt-5 ">Publish</button>

      </div>
      </div>
    </div>
  )
}

export default Create
