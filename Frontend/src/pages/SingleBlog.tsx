
import { useBLog } from '../hooks';
import { useParams } from 'react-router-dom';
import FullBlog from '../components/FullBlog';
import Shimmer from '../components/Shimmer';

function SingleBlog() {
    const { id } = useParams();
     const {loading,data} = useBLog({
        id :id||""
     });
     if( loading || !data){
  return (
    <div>
     <div><Shimmer/></div> 
     </div>
  )
}
   return <div>
      <FullBlog blog={data}/>
    </div>
    
   
  
}


export default SingleBlog
