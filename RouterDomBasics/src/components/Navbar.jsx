import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-blue-400 w-full py-4 px-8'>
        <h1 className='text-2xl font-semibold'>harshmalu</h1>
        <div className='flex gap-10'>
            <p className='text-xl font-semibold'>About</p>
            <p className='text-xl font-semibold'>Products</p>
            <p className='text-xl font-semibold'>Profile</p>
        </div>
    </div>
  )
}

export default Navbar