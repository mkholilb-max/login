import React from 'react'
import { useState } from 'react'
import Button from './Button'
import { products } from '../data/product'
import Header from './Header'

const Product = ({}) => {
    const [productList, setProductList] = useState(products)
    const [type, setType] = useState("shoes")

    const handleIncrement = (id) => {
      setProductList(productList.map(p => 
        p.id === id ? {...p, count: (p.count || 0 ) + 1}
        : p
      ));
    };

    const handleDecrement = (id) => {
      setProductList(productList.map(p => 
        p.id === id ? {...p, count: (p.count || 0 ) - 1}
        : p
      ));
    };

  return (
    <div>
      <Header totalProduct={productList.length} product={productList.reduce((total, product) => total + product.count, 0)} /> 
            <div className='flex justify-center gap-4 mb-4'>
                <Button className='bg-blue-500' onClick={() => setType("jerseys")}>Toggle Jerseys</Button> 
                <Button className='bg-blue-500' onClick={() => setType("shoes")}>Toggle Shoes</Button> 
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
                            <Button className='bg-indigo-500 mt-4' onClick={() => handleIncrement(product.id)}>+</Button>
                            <h1>{product.count}</h1>
                            <Button className='bg-indigo-500 mt-4' onClick={ () => handleDecrement(product.id)}>-</Button>
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
                            <Button className='bg-indigo-500 mt-4' onClick={ () => {handleIncrement(product.id)}}>+</Button>
                            <h1>{product.count}</h1>
                            <Button className='bg-indigo-500 mt-4' onClick={ () => {handleDecrement(product.id)}}>-</Button>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Product