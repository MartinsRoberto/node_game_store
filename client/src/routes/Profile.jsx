import React, { useEffect, useState } from 'react'

import gameStoreFetch from '../axios/config'

const Profile = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loadUser = async () => {
    const id = localStorage.getItem('userId')

    const user = await gameStoreFetch.get(`/user/${id}`)

    setName(user.data.name)
    setLastName(user.data.lastname)
    setEmail(user.data.email)
    setPassword(user.data.password)
  }

  useEffect(() => {
    loadUser()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  return (
    <div id="profile">
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
        <button type='submit' className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Profile