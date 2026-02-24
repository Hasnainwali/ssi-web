import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllRoutes from './routes/AllRoutes'
import { Toaster } from 'react-hot-toast'




const App = () => {

  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: { background: "#16a34a", color: "#fff" },

          },
          error: {
            style: { background: "#dc2626", color: "#fff" },
          }
        }}
      />

      <AllRoutes />
    </>
  )
}

export default App