    import React, { useEffect, useState} from 'react'
    import Button from './Button'
    import { products } from '../data/product'
    import Header from './Header'
    import { useDispatch, useSelector } from 'react-redux'
    import { DATA_PRODUCT } from '../store/Action/TotalPriceAction'
    import { useNavigate } from 'react-router'
    import { SET_CATEGORY, SET_MAX_PRICE, SET_MIN_PRICE, SET_SEARCH } from '../store/Action/FilterAction'
    import SearchBar from './SearchBar'

    const Product = ({}) => {

        const productList = useSelector((state) => state.totalPriceReducer.dataProduct)
        const dispatch = useDispatch()
        const navigate = useNavigate()
        const category = useSelector((state) => state?.filterReducer.category)
        const searchQuery = useSelector((state) => state?.filterReducer.searchQuery)
        const minPrice = useSelector((state) => state?.filterReducer.minPrice)
        const maxPrice = useSelector((state) => state?.filterReducer.maxPrice)
        const cartProduct = productList.filter(p => p.count > 0)

        const handleIncrement = (id) => {
            const updated = productList.map(p =>
                p.id === id ? { ...p, count: (p.count || 0) + 1 } : p
            );
            dispatch({ type: DATA_PRODUCT, payload: updated });
        };


        const handleDecrement = (id) => {
            console.log("ID:", id)
            dispatch({type: DATA_PRODUCT, payload: productList.map(p => 
            p.id === id ? {...p, count: Math.max((p.count || 0) -1, 0)}
            : p
        )});
        };

        const handleDelete = (id) => {
            dispatch({type: DATA_PRODUCT, payload: productList.map(p => p.id === id ? {...p, count: 0} 
            : p)
            });
        }

        const handleCheckout = () => {
            dispatch({type: DATA_PRODUCT, payload: productList.map(p => p.count > 0 ? {...p, count: 0} : p)});
        }

        useEffect(() => {
            if (productList.length === 0) {
                dispatch({type: DATA_PRODUCT, payload: products});
            }
        }, []);

        const handleCategoryChange = (category) => {
            dispatch({type: SET_CATEGORY, payload: category});
        }

        const handleResetFilter = () => {
            dispatch({type: SET_CATEGORY, payload: ""});
            dispatch({type: SET_MIN_PRICE, payload: 0});
            dispatch({type: SET_MAX_PRICE, payload: Infinity});
            dispatch({type: SET_SEARCH, payload: ""});
        }

        const filteredProducts = productList.filter((product) => {

        const matchSearch =
            product.name.toLowerCase()
            .includes(searchQuery.toLowerCase())

        const matchCategory =
            category === ""
            ? true
            : category === "jerseys"
            ? product.type === "jersey"
            : product.type === "shoes"

        const matchMinPrice = product.price >= minPrice
        const matchMaxPrice = product.price <= maxPrice

        return matchSearch && matchCategory && matchMinPrice && matchMaxPrice
        })

    return (
        <div className='flex flex-col justify-center'>
        <Header totalProduct={productList.length} />
        <SearchBar /> 
            <div className='flex justify-center gap-10 mb-4'>
                <Button className='bg-blue-500' onClick={() => handleCategoryChange("jerseys")}>Toggle Jerseys</Button> 
                <Button className='bg-blue-500' onClick={() => handleResetFilter()}>Reset Filter</Button> 
                <Button className='bg-blue-500' onClick={() => handleCategoryChange("shoes")}>Toggle Shoes</Button> 
            </div>
            <div className='w-full grid grid-cols-3 gap-4'>
                {filteredProducts.map((product,i) => (
                        <div className='border p-4 m-4 rounded-lg' key={product.id}>
                            <h1 onClick={() => {navigate(`/detail/${i}`)}} className='text-xl font-bold mb-2 '>
                                {product.name}
                            </h1>
                            <p> {product.brand}</p>
                            <p> {product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                            <div className='flex justify-center items-center'>
                                <Button className='bg-indigo-500 m-4' onClick={() => handleIncrement(product.id)}>+</Button>
                                <h1>{product.count}</h1>
                                <Button className='bg-indigo-500 m-4' onClick={ () => handleDecrement(product.id)}>-</Button>
                            </div>
                        </div>            
                ))}
            </div> 
            <div className='flex flex-col items-start mx-10 my-4'>
                <h1 className='text-md font-bold'>Keranjang</h1>
                {cartProduct.filter(product => product.count > 0).map((product) => (
                    <div key={product.id} className='flex justify-center items-center gap-4 '>
                        <h1 className='text-sm font-bold my-4'>
                            {product.name}
                        </h1>
                        <p> {product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                        <p>Jumlah: {product.count}</p>
                        <Button className='bg-red-500' onClick={() => {
                            handleDelete(product.id);
                        }}>
                            Hapus
                        </Button>
                    </div>
                ))}
                <h1 className='text-md font-bold mt-4'>
                    Total: {cartProduct.reduce((total, product) => total + (product.count || 0), 0)}
                </h1>

                <h1 className='text-md font-bold'>
                    Total Harga: {cartProduct.reduce(
                    (total, product) => total + ((product.count || 0) * product.price),
                    0
                    ).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                </h1>


                <Button className='bg-blue-500 w-2xs m-4' onClick={() => handleCheckout()}>Checkout</Button>
            </div>
            <div className='flex justify-center'>
                <Button className='bg-red-500 w-1/2 m-4' onClick={() => {
                    localStorage.removeItem("isLoggedIn")
                    navigate("/login")
                }}>Logout
                </Button>
            </div>
        </div>
    )
    }

    export default Product