import Leaderboard from './pages/Leaderboard'
import Playground from './pages/Game'
import Home from './pages/Home'
import { useRoutes } from 'react-router-dom'

export default function App() {
  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/game',
      element: <Playground />
    },
    {
      path: '/leaderboard',
      element: <Leaderboard />
    }
  ]

  const elements = useRoutes(routes)

  return elements
}

// Todo: to change contexts param logic
// Todo: extraer types de componentes y contextos
// Todo: crear mas reducers donde se pueda
// Todo: No mostrar carta de confirmacion de borrar leaderboard si esta vacio
