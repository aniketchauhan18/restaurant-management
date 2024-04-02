import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterationPage from './pages/RegisterationPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterationPage />}/>
      </Routes>
    </div>
  )
}

export default App