import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import IInterval from '../IInterval.jsx'
import Fetchapiuseeffect from './Fetchapiuseeffect.jsx'
import Weatherapi from './Weatherapi.jsx'




const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/IInterval",element:<IInterval/>},
      {path:"/fetch",element:<Fetchapiuseeffect/>},
      {path:"/weather",element:<Weatherapi/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}/>
  </StrictMode>,
)
