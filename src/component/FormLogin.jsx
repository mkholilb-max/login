import React, { useEffect, useState } from 'react'
import Button from './Button'
import Input from './Input'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN } from '../store/Action/AuthAction'
import { admin } from '../data/data'

const FormLogin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isLoggedIn = useSelector(
        (state) => state?.authReducer.isLoggedIn
    )

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {

        dispatch({
            type: LOGIN,
            payload: {
                username,
                password
            }
        })

        localStorage.setItem("isLoggedIn", "true")
    }

    useEffect(() => {

        const loggedInStatus =
            localStorage.getItem("isLoggedIn")

        if (isLoggedIn || loggedInStatus === "true") {
            navigate("/dashboard")
        }

    }, [isLoggedIn, navigate])

    return (
        <div>

            <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>

                <h1 className='text-3xl font-bold text-center m-3'>
                    Login
                </h1>

                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder='Username'
                />

                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='Password'
                />

                <Button
                    className='bg-blue-500'
                    onClick={handleLogin}
                >
                    Login
                </Button>

            </div>

        </div>
    )
}

export default FormLogin