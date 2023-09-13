import {NavLink,Outlet} from "react-router-dom";
import  './css/navbar.css'
export default function Navbar(){
    
    return(

        <div className="Navbar">
            <div className="menu">
            <header>
                <h1>Routing Web page </h1>
                <NavLink id="nl" to="/">Home</NavLink>
                <NavLink id="nl" to="login">Login</NavLink>
                <NavLink id="nl" to="about">About</NavLink>
            </header>
            </div>
            <main>
                <Outlet/>
            </main>

       
        </div> 
    );
}