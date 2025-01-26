import { BrowserRouter , Route,Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blogs from "./pages/Blogs.tsx"
import SingleBlog from "./pages/SingleBlog.tsx"
import PostBlog from "./pages/PostBlog.tsx"


function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/blog/:id" element={<SingleBlog/>} />
      <Route path="/create" element={<PostBlog/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
