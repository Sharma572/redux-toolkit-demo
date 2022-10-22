import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navBar'>
        <span>Logo</span>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </div>
  )
}

export default Navbar