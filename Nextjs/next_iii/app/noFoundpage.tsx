import React from 'react'
import { Link } from 'react-router-dom'

export default function noFoundpage() {
  return (
    <div>
        <h1> page does not found </h1>
        <h1> the page doesn't exist </h1>
        <p>Click here to go back in the home page <Link href="/">Dashboard</Link></p>
    </div>
  )
}
