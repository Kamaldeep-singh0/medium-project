import axios from 'axios';
import  { useEffect, useState } from 'react'
import { BACKEND_URL } from '../config';

export interface Blog {
    title : string,
    content : string,
    id : string,
    author: {
        name: string
    }
}

export function useBLog ({id}:{id:string}){
    const[loading,setLoading] = useState(true);
    const[data,setData] = useState<Blog>();
 
    useEffect( ()=>{
 
      axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
         headers:{
             Authorization : `Bearer ${localStorage.getItem("token")}`
         }
     }).then((res)=>{
         setData(res.data.blog);
         
         setLoading(false);
     })
 
    },[])
 
    return {
     loading,
     data
    }
 }

export function useBLogs (){
   const[loading,setLoading] = useState(true);
   const[data,setData] = useState<Blog[]>([]);

   useEffect( ()=>{
  
    console.log(localStorage.getItem("token"))

     axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers:{
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    }).then((res)=>{
        setData(res.data.blog);
        
        setLoading(false);
    })

   },[])

   return {
    loading,
    data
   }
}