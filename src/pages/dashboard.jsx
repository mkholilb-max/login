import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import Button from '../component/Button'
import { products } from '../data/product'
import Header from '../component/Header'

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
        <Header totalProduct={productList.length} product={productList.reduce((total, product) => total + product.count, 0)} /> 
            <div className='flex justify-center gap-4 mb-4'>
                <Button className='bg-blue-500' onClick={() => setType(type && "shoes")}>Toggle Jerseys</Button> 
                <Button className='bg-blue-500' onClick={() => setType(type && "jersey")}>Toggle Shoes</Button> 
            </div>
        <div className='w-full grid grid-cols-3 gap-4'>
            {type === "shoes" ?
                 productList.filter(product => product.type === "shoes").map ((product) => (
                <div key={product.id} className='border p-4 m-4 rounded-lg'>
                        <h1 className='text-xl font-bold mb-2 '>
                            {product.name}
                        </h1>
                        <p> {product.brand}</p>
                        <p> {product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                        <div className='flex justify-center items-center'>
                            <Button className='bg-indigo-500 mt-4' onClick={ () => {
                                setProductList(productList.map(p =>
                                    p.id === product.id ? { ...p, count: p.count + 1 } : p
                                ))
                            }}>+</Button>
                            <h1>{product.count}</h1>
                            <Button className='bg-indigo-500 mt-4' onClick={ () => {
                                setProductList(productList.map(p =>
                                    p.id === product.id ? { ...p, count: p.count - 1 } : p
                                ))
                            }}>-</Button>
                        </div>
                    </div>            
                )) : productList.filter(product => product.type === "jersey").map((product)=> (
                    <div key={product.id} className='border p-4 m-4 rounded-lg'>
                        <h1 className='text-xl font-bold mb-2 '>
                            {product.name}
                        </h1>
                        <p> {product.brand}</p>
                        <p> {product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                        <div className='flex justify-center items-center'>
                            <Button className='bg-indigo-500 mt-4' onClick={ () => {
                                setProductList(productList.map(p =>
                                    p.id === product.id ? { ...p, count: p.count + 1 } : p
                                ))
                            }}>+</Button>
                            <h1>{product.count}</h1>
                            <Button className='bg-indigo-500 mt-4' onClick={ () => {
                                setProductList(productList.map(p =>
                                    p.id === product.id ? { ...p, count: p.count - 1 } : p
                                ))
                            }}>-</Button>
                        </div>
                    </div>
                ))}
        </div>

        <Button className='bg-red-500' onClick={() => {
            localStorage.removeItem("isLoggedIn")
            navigate("/")
        }}>Logout
        </Button>

        
    </div>
  )
}

export default Dashboard