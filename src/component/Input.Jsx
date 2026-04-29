import React from 'react'

const Input = ({ value, type, onChange, placeholder, className }) => {
  return (
    <>
    <input value={value} onChange={onChange} type={type} placeholder={placeholder} className='{`border-2 border-blue-500 rounded-md p-2 w-full mb-4 ${className}`}' />
    </>
  )
}

export default Input