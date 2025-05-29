import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'

const App = () => {
  return (
    
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>

  )
}

export default App