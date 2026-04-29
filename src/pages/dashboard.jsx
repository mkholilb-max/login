import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import Button from '../component/Button'

const Dashboard = () => {
    const navigate = useNavigate()
  

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn")
        if(!loggedInStatus) {
        window.location.href = "/"
    }
    }, [])
  
  return (
    <div>
        <h1 className='text-3xl font-bold text-center m-3'>Welcome to the Dashboard</h1>

        <Button className='bg-red-500' onClick={() => {
            localStorage.removeItem("isLoggedIn")
            navigate("/")
        }}>Logout</Button>
    </div>
  )
}

export default Dashboard