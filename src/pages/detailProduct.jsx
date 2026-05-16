import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'

const DetailProduct = () => {
    const location = useLocation()    
    const productId = location.pathname.split("/")[2]

    const productList = useSelector((state) => state?.totalPriceReducer.dataProduct)

    useEffect(() => {
        console.log(productList[productId])
    },[productId, productList])

  return (
    <div>
        <h1>{productList[productId]?.name}</h1>
        <h1>{productList[productId]?.price}</h1>
        <h1>{productList[productId]?.discount}</h1>
        <h1>{productList[productId]?.description}</h1>
    </div>
  )
}

export default DetailProduct