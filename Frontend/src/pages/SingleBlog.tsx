import React from 'react'
import { useBLog } from '../hooks';
import { useParams } from 'react-router-dom';
import FullBlog from '../components/FullBlog';

function SingleBlog() {
    const { id } = useParams();
     const {loading,data} = useBLog({
        id :id||""
     });
     if( loading || !data){
  return (
    <div>
     <div>loading</div> 
     </div>
  )
}
   return <div>
      <FullBlog blog={data}/>
    </div>
    
   
  
}


export default SingleBlog
