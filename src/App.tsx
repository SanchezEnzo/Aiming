import Leaderboard from './pages/Leaderboard'
import Playground from './pages/Playground'
import Home from './pages/Home'
import { useRoutes } from 'react-router-dom'

export default function App() {
  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/play',
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
