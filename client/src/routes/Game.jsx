import { useState, useEffect } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'

import gameStoreFetch from '../axios/config'

import "./Game.css"
const Game = () => {
  const { id } = useParams()

  const [game, setGame] = useState(null)

  const navigate = useNavigate()

  const loadGame = async () => {
    const res = await gameStoreFetch.get(`/game/${id}`)

    setGame(res.data)
  }

  useEffect(() => {
    loadGame()
  }, [])


  const handleCart = async () => {
    try{
      const data = {
        userId: localStorage.getItem('userId'),
        gameId: id
      }

      const res = await gameStoreFetch.post("/cart", data)
      
      if (res.status === 201) {
        navigate("/cart");
      }
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div id="game-container">
      {!game && <p>Carregando</p>}
      {game && (
        <div className="game-details">
          <div className="header">
            <h2>{game.name} </h2>
            <span>RELEASE DATE: {game.releaseYear}</span>
          </div>

          <img src={game.image} alt={game.name} />

          <div className="price">R$ {game.price}</div>

          <div>{game.description}</div>

          <div className="line"></div>

          <h4>Garanta já seu!</h4>

          <button className='btn' onClick={handleCart}>Adicionar ao carrinho</button>

          <div className='devices'>Plataformas compatíveis: {game.devices}</div>
          
        </div>
      )}
    </div>
  )
}

export default Game