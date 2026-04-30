import React from 'react'

const Header = ({ product, totalProduct }) => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-center m-3'>Welcome to the React Course</h1>
        <h1 className='text-xl font-semibold text-center m-3'>Total Product: {totalProduct}</h1>
        <h1 className='text-xl font-semibold text-center m-3'>Keranjang: {product}</h1>
    </div>
  )
}

export default Header