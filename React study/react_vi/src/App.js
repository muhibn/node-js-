import Navbar  from "./component/Navbar";
import Create  from "./component/Create";
import Home from "./component/Home";
import Login from "./component/Login";
import Aboute from "./component/Aboute";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements( 
      <Route path="/" element={<Navbar/>}>

        <Route path="" element={<Navbar/>}/> 
        <Route path="Create" element={<Create/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Aboute" element={<Aboute/>}/>

      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
   
  );
}

export default App;
