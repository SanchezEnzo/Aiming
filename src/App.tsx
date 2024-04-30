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
// TODO - Conseguir rangos para cada dificultad
// TODO - Arreglar el doble posicionamiento de la pelota cuando damos mas de un click
// TODO - Mostar nombre y dificultad en pleno juego
// TODO - No agregar más calificaciones al ranking si ya hay 10. Si el valor es mejor, reemplazarlo. Luego borrar el slice que corta en 10 porque va a estar al dope.
// TODO - Hacer las medias para pantallas más chicas.
// TODO - Ver metas y links, temas de accesibilidad y SEO
// TODO - Borrar sólo el leaderboard por dificultad (nose)
// TODO - Boton de como jugar?
// TODO - Cuando vayamos al LeaderBoard, que nos aparezca la tabla seleccionada con la dificultad que estamos jugando
// TODO - Buscar alternativas a los context de time y score, ya que se debe usar para cosas que cambien muy pocas veces
// TODO - Que no me deje borrar el leaderboard dos veces seguidas. O que no deje borrar si no hay nada para borrar
