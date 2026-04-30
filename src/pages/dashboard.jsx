import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import Button from '../component/Button'
import { products } from '../data/product'
import Header from '../component/Header'
import Product from '../component/Product'

const Dashboard = () => {
    const navigate = useNavigate()
    const [productList, setProductList] = useState(products)
    const [cart, setCart] = useState(0)
    const [type, setType] = useState("shoes")

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn")
        if(!loggedInStatus) {
        window.location.href = "/"
    }
    }, [])
  
  return (
    <div>
        <Product/>
        <Button className='bg-red-500' onClick={() => {
            localStorage.removeItem("isLoggedIn")
            navigate("/")
        }}>Logout
        </Button>
    </div>
  )
}

export default Dashboard