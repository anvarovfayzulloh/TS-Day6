import { useRoutes } from 'react-router-dom'
import Home from './home/Home'
import NotFound from './notfound/NotFound'
import Create from './create/Create'
import Details from './details/Details'

const RouterController = () => {
  return useRoutes([
    {
        path: '/',
        element: <Home/>
    },
    {
      path: '/create',
      element: <Create/>
    },
    {
      path: '/todo/:id',
      element: <Details/>
    },
    {
      path: "*",
      element: <NotFound/>
    },
  ])
}

export default RouterController