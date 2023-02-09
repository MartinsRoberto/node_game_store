import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import gameStoreFetch from '../axios/config'

import "./Game.css"
const Game = () => {
  const { id } = useParams()

  const [game, setGame] = useState(null)

  const loadGame = async () => {
    const res = await gameStoreFetch.get(`/game/${id}`)

    setGame(res.data)

    console.log(res.data)
  }

  useEffect(() => {
    loadGame()
  }, [])

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

          <button className='btn'>Adicionar ao carrinho</button>

          <div className='devices'>Plataformas compatíveis: {game.devices.map((device) => (
            <span key={device}>{device} | </span>
          ))}</div>
        </div>
      )}
    </div>
  )
}

export default Game