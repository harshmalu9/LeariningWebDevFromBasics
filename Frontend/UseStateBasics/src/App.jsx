import React, { useState } from 'react';

const App = () => {

  const [user, setUser] = useState('harsh');

  const btnClicked = () => {
    console.log(user);
    if(user === 'harsh') setUser('sakshi')
    else setUser('harsh')
    console.log(user);
    
  };

  return (
    <div className='h-screen bg-black text-white p-10'>
      <div className='px-3 py-4 bg-gray-600 w-fit m-10 rounded-2xl'>
        <h1 className='text-xl font-bold '>{user}</h1>
      </div>
      <button
        onClick={btnClicked}
        className='bg-red-400 px-3 py-5 rounded w-fit m-10 active:scale-95'
      >
        Change User
      </button>
    </div>
  );
};

export default App;
