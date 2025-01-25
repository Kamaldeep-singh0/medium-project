import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../config';

export interface Blog {
    title : string,
    content : string,
    id : string,
    authorName : string,
}

export function useBLogs (){
   const[loading,setLoading] = useState(true);
   const[data,setData] = useState<Blog[]>([]);

   useEffect( ()=>{
     axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers:{
            Authorization : localStorage.getItem("token")
        }
    }).then((res)=>{
        setData(res.data.blogs);
        setLoading(false);
    })

   },[])

   return {
    loading,
    data
   }
}