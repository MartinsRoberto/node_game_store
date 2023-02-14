import React, { useState, useEffect } from 'react'

import gameStoreFetch from '../axios/config'

const Cart = () => {
  const [cartItems, setCartItems] = useState(null)

  const loadCart = async () => {

    const userId = localStorage.getItem('userId')

    const res = await gameStoreFetch.get(`/cart/${userId}`)

    console.log(res.data)
    setCartItems(res.data)
  }

  useEffect(() => {
    loadCart()
  }, [])

  return (
    <div id='cart'>
      {!cartItems && <p>Carrinho vazio</p>}
      {cartItems && cartItems.map((item) => (
        <div key={item.id}>{item.gameId}</div>
      ))}
    </div>
  )
}

export default Cart