import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/userContext';


import './Navbar.css'

const Navbar = () => {

  const [loggedUser, setLoggedUser] = useState()

  const checkUser = () => {
    if (localStorage.getItem("userId")) {
      setLoggedUser(true)
    }
    else {
      setLoggedUser(false)
    }
  }

  const logout = () => {
    localStorage.setItem("userId", "")
    setLoggedUser(false)
  }

  useEffect(() => {
    checkUser()
  }, [])


  return (
    <nav id="nav-bar">
      <h2><NavLink to="/">GameStore</NavLink></h2>
      <ul className='menu'>
        <li><NavLink to="/">Home</NavLink></li>
        {!loggedUser && <li><NavLink to="/login">Login</NavLink></li>}
        {!loggedUser && <li><NavLink to="/register" className="register">Cadastrar</NavLink></li>}
        {loggedUser && <li><NavLink to="/profile" >Ver perfil</NavLink></li>}
        {loggedUser && <li><NavLink to="/cart" >Carrinho</NavLink></li>}
        {loggedUser && <li onClick={logout}><NavLink to="/">Sair</NavLink></li>}
      </ul>
    </nav>
  )
}

export default Navbar