import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const itemsCount = useSelector((count)=> count.cart)
  return (
    <div className='navBar'>
        <span>Logo</span>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <span>Cart items: {itemsCount.length}</span>
        </div>
    </div>
  )
}

export default Navbar