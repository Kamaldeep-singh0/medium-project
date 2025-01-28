import { BrowserRouter , Route,Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blogs from "./pages/Blogs.tsx"
import SingleBlog from "./pages/SingleBlog.tsx"
import PostBlog from "./pages/PostBlog.tsx"
import React, { useState } from "react"

type UserContextType = {
  userName: string | null;
  setUserName: React.Dispatch<React.SetStateAction<string | null>>;
}

export const UserContext = React.createContext<UserContextType>({
  userName: null,
  setUserName: () => null
});

function App() {
  const [userName,setUserName] = useState<string | null>(null);
 
  return (
    <>
    <BrowserRouter>
    <UserContext.Provider value = {{userName:userName , setUserName:setUserName}} >
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/blog/:id" element={<SingleBlog/>} />
      <Route path="/create" element={<PostBlog/>} />
    </Routes>
    </UserContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
