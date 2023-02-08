import { Link, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useState()

  const checkUser = () => {
    if (localStorage.getItem("login")) {
      setLoggedUser(true)
    }
  }
  
  useEffect(() => {
    checkUser()
  }, [])

  return (
    <nav id="nav-bar">
      <h2><NavLink to="/">GameStore</NavLink></h2>
      <ul className='menu'>
        <li><NavLink to="/">Home</NavLink></li>
        {!loggedUser && <li><NavLink to="/">Login</NavLink></li>}
        {!loggedUser && <li><NavLink to="/register" className="register">Cadastrar</NavLink></li>}
        {loggedUser && <li><NavLink to="/register" >Ver perfil</NavLink></li>}
        {loggedUser && <li><NavLink to="/register" >Carrinho</NavLink></li>}

      </ul>
    </nav>
  )
}

export default Navbar