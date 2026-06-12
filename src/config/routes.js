// ============================================================
// ROUTES CONFIG
// Naya route add karna ho toh sirf yahan add karo
// AppRouter automatically render karega
// ============================================================
import { lazy } from 'react'

const Home = lazy(() => import('../pages/Home/Home'))
const About = lazy(() => import('../pages/About/About'))

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
  },
  // Naya page:
  // { path: '/contact', component: lazy(() => import('../pages/Contact/Contact')) }
]
