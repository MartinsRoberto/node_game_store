import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import gameStoreFetch from '../axios/config'

import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("a@a")
  const [password, setPassword] = useState("a")
  const [msgLogin, setMsgLogin] = useState('')

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try{
      const user = {
        email,
        password,
      }
  
      const res = await gameStoreFetch.post('/user/auth', user)
    
      if (res.status === 201) {
        localStorage.setItem("userId", res.data)
        navigate("/");
      }
      else{
        setMsgLogin('Email ou senha incorretos')
      }
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div id='login'>
      <h3>Faça o login para aproveitar melhor o site</h3>
      <form onSubmit={handleLogin}>
        <label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
          <span className={email && 'active'}>Email</span>
        </label>
        <label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
          <span className={password && 'active'}>Senha</span>
        </label>
        <button type='submit' className='btn'>Entrar</button>
      </form>
      {msgLogin && <p className='msg-login'>{msgLogin}</p>}
    </div>
  )
}

export default Login