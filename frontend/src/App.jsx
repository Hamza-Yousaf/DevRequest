import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>

  )
}

export default App