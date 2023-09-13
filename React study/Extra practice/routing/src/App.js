import Home from "./method/Home";
import Login from "./method/Login"; 
import About from "./method/About";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import Navbar from "./method/Navbar";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path="about" element={<About/>}/>
    </Route>
  )
)
function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
