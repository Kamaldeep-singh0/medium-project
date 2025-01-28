import NavBar from "./NavBar"


function Shimmer() {
  return (<div>
    <NavBar/>
    <div className="flex justify-center">
        <div className="max-w-screen-xl w-full px-6 md:px-12 pt-28">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded animate-pulse w-4/5"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse w-3/5"></div>
              </div>
              
              <div className="mt-6 h-4 bg-gray-200 rounded animate-pulse w-48"></div>
              
              <div className="mt-8 space-y-6">
              
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="sticky top-28">
                <div className="rounded-xl bg-gray-50 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>
                    <div className="space-y-3 flex-grow">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                      <div className="h-8 bg-gray-200 rounded animate-pulse w-24"></div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
  )
}

export default Shimmer
