import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <main className="container">
      <nav className="navbar">
        <Link href='/' className="navbar-brand">Home</Link>
        <Link href='/News' className="nav-link">News</Link>
        <Link href='/News/latest' className="nav-link">Latest News</Link>
      </nav>
    </main>
  );
}
