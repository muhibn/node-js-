import { NavLink,Outlet } from "react-router-dom";
const Navibar = () => {
    return (
        <div className="Navibar">
            <div className="Nav">
                <NavLink to="">Home</NavLink>
                <NavLink to="Login">Login</NavLink>
                <NavLink to="Posts">Posts</NavLink>
                <NavLink to="About">About</NavLink>

            </div>
            <main>
                <Outlet/>
            </main>


        </div>
    );
}
 
export default Navibar;