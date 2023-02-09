import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import gameStoreFetch from '../axios/config'



const Login = () => {
  const [email, setEmail] = useState("a@a")
  const [password, setPassword] = useState("a")

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    
    try{
      console.log('oi')
      const user = { email, password}

      const res = await gameStoreFetch.get('/user', user)

      console.log(res)

      if (res.status === 200) {
        localStorage.setItem("login", user.email)
        navigate("/");
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
    </div>
  )
}

export default Login