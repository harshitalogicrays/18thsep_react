import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Routing from './Routing.jsx'

createRoot(document.getElementById('root')).render(
 <RouterProvider router={Routing}/>
  
)
