import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import gameStoreFetch from '../axios/config'

const Register = () => {
  const [name, setName] = useState("a")
  const [lastName, setLastName] = useState("a")
  const [email, setEmail] = useState("a@a")
  const [password, setPassword] = useState("a")
  const [confirmPassword, setConfirmPassword] = useState("a")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      const user = {
        name,
        lastName,
        email,
        password,
        confirmPassword
      }
  
      const res = await gameStoreFetch.post('/user', user)
    
      if (res.status === 201) {

        localStorage.setItem("login", user.email)
        navigate("/");
      }
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div id="register">
      <h3>Faça o seu cadastro</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} required />
          <span className={name && 'active'}>Nome</span>
        </label>
        <label>
          <input type="text" name="lastname" onChange={(e) => setLastName(e.target.value)} value={lastName} required />
          <span className={lastName && 'active'}>Sobrenome</span>
        </label>
        <label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
          <span className={email && 'active'}>Email</span>
        </label>
        <label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
          <span className={password && 'active'}>Senha</span>
        </label>
        <label >
          <input type="password" name="confirmpassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} required />
          <span className={confirmPassword && 'active'}>Confirmar senha</span>
        </label>
        <button type='submit' className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register