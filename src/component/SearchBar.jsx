import React, { useEffect, useState } from 'react'
import Input from './Input'
import { useSelector, useDispatch } from 'react-redux'
import { SET_SEARCH, SET_MAX_PRICE, SET_MIN_PRICE } from '../store/Action/FilterAction'
import Button from './Button'


const SearchBar = () => {
  const dispatch = useDispatch()
  const search = useSelector((state) => state?.filterReducer.searchQuery)
  const minPrice = useSelector((state) => state?.filterReducer.minPrice)
  const maxPrice = useSelector((state) => state?.filterReducer.maxPrice)
  const [inputValue, setInputValue] = useState(search)

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: SET_SEARCH, payload: inputValue })
    }, 500)

    return () => clearTimeout(timer)
  }, [inputValue, dispatch])

  const handleSearchChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='flex justify-center items-center max-w-md mx-auto my-4 gap-6'>
      <Input
        name="minPrice"
        type="number"
        value={minPrice}
        onChange={(e) => dispatch({
          type: SET_MIN_PRICE,
          payload: e.target.value === "" ? 0 : Number(e.target.value)
        }) || setInputMinPrice(e.target.value)}
        placeholder="Min Price"
        className='border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
      />
      <Input
        name="search"
        value={inputValue}
        type="text"
        onChange={handleSearchChange}
        placeholder="Search products..."
        className='border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
      />
      <Input
        name="maxPrice"
        type="number"
        value={maxPrice === Infinity ? "" : maxPrice}
        onChange={(e) => dispatch({
          type: SET_MAX_PRICE,
          payload: e.target.value === "" ? Infinity : Number(e.target.value)
        }) || setInputMaxPrice(e.target.value)}
        placeholder="Max Price"
        className='border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
      />
    </div>
    )
  }


export default SearchBar