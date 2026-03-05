import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './publicRoutes/login.tsx'
import Signup from './publicRoutes/signup.tsx'
import { Provider } from 'react-redux';
import { store } from '././app/store.tsx'
import AdminDashboard from './privateRoutes/admin';


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
      },
      {
        path:'/adminsight',
        element:<AdminDashboard />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={routerpages} />
    </StrictMode>
  </Provider>
)
