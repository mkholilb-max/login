import React from 'react'
import { useState, useEffect } from 'react'
import Button from './Button'
import Input from './Input'
import { useNavigate } from 'react-router'

const FormLogin = () => {
    const navigate = useNavigate()

    const loggedInStatus = localStorage.getItem("isLoggedIn")

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const saveData = () => {
        localStorage.setItem("isLoggedIn", true)
        setIsLoggedIn(true)
    }

    const handleLogin = () => {
        const storedAdmin = localStorage.getItem("admin") ? JSON.parse(localStorage.getItem("admin")) : null
        const foundUser = storedAdmin ? storedAdmin.find(admin => admin.username === username) : null
        username === foundUser?.username && password === foundUser?.password ? saveData() 
            : alert("Invalid credentials")
                setUsername("")
                setPassword("")
            if(isLoggedIn === true) {
                navigate("/dashboard")
            }
    }


    useEffect(() => {
        isLoggedIn === true || loggedInStatus === "true" ? navigate("/dashboard") : localStorage.removeItem("isLoggedIn")
    }, [isLoggedIn])
  return (
    <div>
        <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
            <h1 className='text-3xl font-bold text-center m-3'>Login</h1>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' className='' />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='' />
            <Button className='bg-blue-500' onClick={handleLogin}>
               Login
            </Button>
        </div>
    </div>
  )
}

export default FormLogin