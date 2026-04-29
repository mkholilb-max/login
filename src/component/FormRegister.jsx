import React from 'react'
import { useState } from 'react'
import { admin } from '../data/data'
import Button from './Button'
import Input from './Input'

const FormRegister = () => {
  const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const handleRegister = (e) => {
      e.preventDefault() // cegah reload halaman
    
      if (password !== confirmPassword) {
        alert("Passwords do not match")
        return
      }
      if (username === admin[0].username) {
        alert("Username already exists")
        return
      }
      if (username === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields")
        return
      }
      if (password.length < 6) {
        alert("Password must be at least 6 characters long")
        return
      }
      admin.push({ username, password })
      alert("Registration successful")
      setUsername("")
      setPassword("")
      setConfirmPassword("")
      window.location.href = "/dashboard"
      window.localStorage.setItem("isLoggedIn", true)
      try {
          localStorage.setItem("admin", JSON.stringify(admin))
      } catch (error) {
          console.error("Error saving admin data to localStorage:", error)
      }
    }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder='Username'
          className=''
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='Password'
          className=''
        />
        <Input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder='Confirm Password'
          className=''
        />
        <Button className='bg-blue-500' type="submit">
          Register
        </Button>
      </form>
    </div>
  )
}

export default FormRegister