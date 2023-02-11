import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { UserProvider } from './context/UserContext'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './routes/Home'
import Game from './routes/Game'
import Register from './routes/Register'
import Login from './routes/Login'
import Cart from './routes/Cart'
import Profile from './routes/Profile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/game/:id",
        element: <Game />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/cart",
        element: <Cart />
      }
      ,
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <UserProvider>
        <App />
      </UserProvider>
    </RouterProvider>
  </React.StrictMode>,
)
