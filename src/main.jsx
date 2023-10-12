import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
   <HelmetProvider>
  
   <div className=''>
   <RouterProvider router={router} />
   </div>
   
   </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>,
)
