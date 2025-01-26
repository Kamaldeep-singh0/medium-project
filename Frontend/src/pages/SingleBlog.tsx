import React from 'react'
import { useBLog } from '../hooks';
import { useParams } from 'react-router-dom';
import FullBlog from '../components/FullBlog';

function SingleBlog() {
    const { id } = useParams();
     const {loading,data} = useBLog({
        id :id||""
     });
  return (
    <div>
    { loading == true? <div>loading</div> :
    <div>
      <FullBlog blog={data}/>
    </div>
    }
    </div>
  )
}

export default SingleBlog
