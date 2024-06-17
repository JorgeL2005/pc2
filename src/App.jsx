import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './layout/NavBar'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import './App.css'
import { AuthProvider } from './AuthContext'


const Home = () => {
  return (
    <>
    <h1>Bienvenidos a mi pagina web!</h1>
    <p>Por favor, registrate o inicia sesion</p>
    </>
  )
}

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth/login' element={<Login/>} />
          <Route path='/auth/register' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router>
      </AuthProvider>
    </>
  )
}

export default App
