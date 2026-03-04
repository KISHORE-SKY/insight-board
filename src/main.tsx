import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './publicRoutes/login.tsx'
import Signup from './publicRoutes/signup.tsx'



const routerpages=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        index:true,
        element:<Login />
      },
      {
        path:'/signup',
        element:<Signup />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routerpages} />
  </StrictMode>
)
