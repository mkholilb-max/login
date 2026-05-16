import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Register from './pages/register'
import DataUser from './pages/dataUser'
import DetailProduct from './pages/detailProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data" element={<DataUser />} />
        <Route path="/detail/:id" element={<DetailProduct />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
