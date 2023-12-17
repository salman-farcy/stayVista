import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDtails from '../pages/RoomDtails/RoomDtails'
import PrivateRoute from './PrivateRoute'
import { getAllRooms, getRoomDtails } from '../api/rooms'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDtails /></PrivateRoute>,
        loader: ({params}) => getRoomDtails(params.id),
      }
    ],
  },

  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])
