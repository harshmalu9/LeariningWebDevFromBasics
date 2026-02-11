import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div className='bg-green-100 py-5 border-5 border-green-300 px-5 m-2 w-fit rounded-2xl  text-black'>
        <h1 className='text-2xl font-semibold'>
            {props.username} {props.age}
        </h1>
    </div>
  )
}

export default Card