import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import gameFetch from '../axios/config'

import "./Home.css"

const Home = () => {

  const [games, setGames] = useState(null)

  const loadGames = async () => {
    const res = await gameFetch.get("/game")

    setGames(res.data)
  }

  useEffect(() => {
    loadGames()
  }, [])

  if (!games) return <p>Carregando...</p>

  return (
    <div id="home">
      <h3>Ache um jogo e divirta-se</h3>
      <div className="games-container">
        {games.length === 0 && <p>Não há festas criadas</p>}
        {games.map((game) => (
          <div className="game" key={game._id}>
            <NavLink to={`/game/${game._id}`}>
              <img src={game.image} alt={game.title} />
              <h2>{game.name}</h2>
              <p>R$ {game.price}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home