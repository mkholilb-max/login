import React from 'react'

const Skeleton = () => {
  return (    
    <div className='flex flex-col'>
      <div className='p-4 m-4 rounded-sm flex justify-center items-center gap-4 animate-pulse'>
        <div className='border bg-gray-200 w-xs h-10 rounded-sm'></div>
        <div className='border bg-gray-200 w-xs h-10 rounded-sm'></div>
        <div className='bg-gray-300 w-18 h-8 rounded-sm'>
        </div>
      </div>
      <div className='grid grid-cols-3'>

        <div className='border p-4 m-4 rounded-lg animate-pulse max-w-sm'>
          <div className='h-6 bg-gray-300 rounded w-3/4 mb-4'></div>

          <div className='h-15 bg-gray-300 rounded w-3/4 mb-2'></div>

          <div className='w-15 h-8 bg-gray-300 rounded'></div>

        </div>
        <div className='border p-4 m-4 rounded-lg animate-pulse max-w-sm'>
          <div className='h-6 bg-gray-300 rounded w-3/4 mb-4'></div>

          <div className='h-15 bg-gray-300 rounded w-3/4 mb-2'></div>

          <div className='w-15 h-8 bg-gray-300 rounded'></div>

        </div>
        <div className='border p-4 m-4 rounded-lg animate-pulse max-w-sm'>
          <div className='h-6 bg-gray-300 rounded w-3/4 mb-4'></div>

          <div className='h-15 bg-gray-300 rounded w-3/4 mb-2'></div>

          <div className='w-15 h-8 bg-gray-300 rounded'></div>

        </div>
        <div className='border p-4 m-4 rounded-lg animate-pulse max-w-sm'>
          <div className='h-6 bg-gray-300 rounded w-3/4 mb-4'></div>

          <div className='h-15 bg-gray-300 rounded w-3/4 mb-2'></div>

          <div className='w-15 h-8 bg-gray-300 rounded'></div>

        </div>
      </div>
    </div>
  )
}

export default Skeleton