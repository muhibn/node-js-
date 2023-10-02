import { NavLink ,Outlet} from "react-router-dom";
import React from 'react'

export default function Navbar() {
  return (
    <div>    <div  className="Navbar">
        <NavLink to="Home">Home</NavLink>
        <NavLink to="Create">Home</NavLink>
        <NavLink to="Login">Login</NavLink>
        <NavLink to="Aboute">Aboute</NavLink>
    </div>
    <Outlet/>
    </div>

  )
}
