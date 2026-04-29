import React, { useState } from 'react'
import { admin } from '../data/data'
import Button from '../component/Button'
import FormRegister from '../component/FormRegister'

const Register = () => {
  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold text-center m-3'>Register</h1>
      <FormRegister />
    </div>
  )
}
console.log(admin)

export default Register
