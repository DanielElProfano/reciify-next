import { lazy } from 'react'
import Recipy from '../../views/Recipy'

import { HOME, WALL, PERFIL, FRIENDS, RECIPY } from './path'

const Home = lazy(() => import('../../views/WelcomePage')) // easy loading
const Wall = lazy(() => import('../../views/Wall'))
const Perfil = lazy(() => import('../../views/Perfil'))
const Friends = lazy(() => import('../../views/Friends'))
const Recipies = lazy(() => import('../../views/Recipy'))

export const routes = [ // creo un array de rutas
  {
    path: HOME,
    component: Home
  },
  {
    path: WALL,
    component: Wall
  },
  {
    path: PERFIL,
    component: Perfil
  },
  {
    path: FRIENDS,
    component: Friends
  },
  {
    path: RECIPY,
    component: Recipies
  }
]
