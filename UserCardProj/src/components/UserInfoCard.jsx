import React from 'react';

const UserInfoCard = () => {
  return (
    <div className='rounded-2xl m-5 bg-red-300 h-100 w-80 p-5'>
      <div className='relative h-40 bg-green-200 rounded-2xl'>
        <div
          className='
        absolute
        left-1/2
        bottom-0
        -translate-x-1/2
        translate-y-1/2
        h-20
        w-20
        rounded-full
        bg-pink-200
      '
        ></div>
      </div>
    </div>
  );
};

export default UserInfoCard;
