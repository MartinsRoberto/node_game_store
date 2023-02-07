import { Link } from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav id="nav-bar">
      <h2><NavLink to="/">GameStore</NavLink></h2>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar