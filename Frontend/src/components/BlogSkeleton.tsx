import React from 'react'

function BlogSkeleton() {
  return (
    <div role="status" className="animate-pulse flex justify-center   ">
    <div className="flex flex-col w-full justify-center pt-14 border-b border-slate-200 pb-4 cursor-pointer">
        <div className="flex">
            <div className="h-8 w-8 bg-gray-200 rounded-full  mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="flex justify-center  pl-2  flex-col">
               
            </div>
            <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
        </div>
        <div className="text-xl font-semibold pt-2">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-md font-thin">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
    </div>
<span className="sr-only">Loading...</span>
</div>
  )
}

export default BlogSkeleton
