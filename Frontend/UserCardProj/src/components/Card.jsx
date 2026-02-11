import React from 'react'

const Card = (props) => {
  console.log(props);
  
  return (
    <div className='w-[16vw] flex flex-col justify-center px-8 py-7 items-center m-4 flex-wrap bg-[#FFEFD5] rounded-3xl'>
        <img src={props.elem.imgURL} alt=""
        className='rounded-full h-24 w-24 object-cover' />
        <h1 className='text-xl font-bold tracking-wide mt-4'>{props.elem.username}</h1>
        <h1 className='text-lg font-semibold mt-2'>{props.elem.userrole}</h1>
        <h1 className='text-md font-light mt-2 text-center'>{props.elem.userDesc}</h1>
        <button 
        onClick={() => {
          props.deleteHandler(props.idx)
        }}
        className='text-lg font-semibold bg-red-400 text-black px-3 py-2 rounded-3xl mt-2 hover:scale-97 active:scale-90 cursor-pointer'>Delete User</button>
    </div>
  )
}

export default Card