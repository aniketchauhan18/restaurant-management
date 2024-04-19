import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Signup from './pages/SignupPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import RestaurantPage from './pages/RestaurantPage'
import CreateRestaurant from './components/admin/CreateRestaurant'
import User from './components/user/User'
import Admin from './components/admin/Admin'
import AdminRestaurant from './components/admin/AdminRestaurant'
import CreateMenu from './components/admin/CreateMenu'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<Signup />}/>
        <Route path='/user' element={<User />}/>S
        <Route path='/admin' element={<Admin />}/>
        <Route path='/admin/restaurant' element={<AdminRestaurant />}/>
        <Route path='/menu' element={<MenuPage />}/>
        <Route path='/createmenu' element={<CreateMenu />}/>
        <Route path='/restaurant' element={<RestaurantPage />}/>
        <Route path='/createrestaurant' element={<CreateRestaurant />}/>
      </Routes>
    </div>
  )
}

export default App