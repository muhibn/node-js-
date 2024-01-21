import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom';
import Navibar from './Component/Navibar';
import Home from './Component/Home';
import Login from './Component/Login';
import About from './Component/About';
import Posts from './Component/Posts';

const router=createBrowserRouter(

    createRoutesFromElements(
      <Route path='/' element={<Navibar/>}>
        
        <Route path='' element={<Home/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Posts" element={<Posts/>}/>
        <Route path='About' element={<About/>}/>

      </Route>
    )
)

function App() {
  return (

    <RouterProvider router={router}/>

  );
}

export default App;
