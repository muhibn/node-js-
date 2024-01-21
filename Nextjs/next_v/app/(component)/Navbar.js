import React from 'react'
import Link  from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar() {
  return (
    <div>
        <nav className='navbar flex  bg-success item-center '>
          <h1>Blog site </h1>
          <ul className='flex  space-x-6'>
            <li>
            <Link href='/'  >Home</Link>
            </li>
            
            <li>
            <Link href='/createuser'  >Create User</Link>
            </li>

            
            <li>
            <Link href='/denied'  >Denied</Link>
            </li>

            
            <li>
            <Link href='/member'  >Member</Link>
            </li>

            
            <li>
            <Link href='/client'  >Client</Link>
            </li>
          </ul>
         </nav>
    </div>
  )
}
