import { NavLink,Outlet } from "react-router-dom";
export default function  Navbar(){
    return ( 
        <div className="Nav">
            <h1> Navbar</h1>
            <div className="menue">
             <NavLink to="/">Home</NavLink>
             <NavLink to="login">Login</NavLink>
             <NavLink to="about">About</NavLink>

            </div>
            <main>
                <Outlet/>
            </main>
        </div>
     );
}