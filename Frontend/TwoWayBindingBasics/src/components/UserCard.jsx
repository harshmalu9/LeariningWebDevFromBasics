import React from 'react';

const UserCard = ({ title, phn }) => {
  return (
    <div
      className='w-56 h-60
      bg-linear-to-br from-green-200 to-green-400
      rounded-2xl
      p-4 m-4
      flex flex-col items-center justify-center gap-3
      shadow-md hover:shadow-xl
      hover:-translate-y-0.75
      transition-all duration-300
      cursor-pointer'
    >
      <div className='h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg'>
        {title?.[0]?.toUpperCase()}
      </div>

      <h3 className='text-xl font-semibold tracking-wide'>{title}</h3>

      <h6 className='text-sm text-gray-700'>{phn}</h6>
    </div>
  );
};

export default UserCard;
