import React from 'react'
import Link  from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar() {
  return (
    <main className='container'>
        <nav className='navbar'>
            <Link href='/'  className='nav-link'>Home</Link>
            <Link href='/Ticket' className='nav-link'>Ticket</Link>
            <Link href='/user' className='nav-link'>UserPage</Link>
        </nav>
    </main>
  )
}
