import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import AddCoffee from './Pages/Icons/AddCoffee/AddCoffee.jsx'
import CoffeeDetails from './Pages/CoffeeDetails/CoffeeDetails.jsx'
import UpdateCoffee from './Pages/UpdateCoffee/UpdateCoffee.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/addcoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/viewCoffee/:id',
    element: <CoffeeDetails></CoffeeDetails>,
    loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)

  },
  {
    path: '/update/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
