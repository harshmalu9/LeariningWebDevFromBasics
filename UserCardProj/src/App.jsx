import React, { useState } from 'react';
import Card from './components/Card';

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();

    setAllUsers([...allUsers, {username, imgURL, userRole, userDesc}])
    
    console.log('submitted');

    setUsername('')
    setImgURL('')
    setUserRole('')
    setUserDesc('')
  };

  const deleteHandler = (idx) => {
    const users = [...allUsers]
    users.splice(idx, 1)
    setAllUsers(users)
  }

  const [username, setUsername] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  return (
    <div className='bg-black h-screen'>
      <form
        onSubmit={submitHandler}
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className='border-2 border-red-200 text-white text-lg px-3 py-2 m-2 rounded-full'
          type='text'
          placeholder='Enter your name'
        />

        <input
          value={imgURL}
          onChange={(e) => {
            setImgURL(e.target.value);
          }}
          className='border-2 border-red-200 text-white text-lg px-3 py-2 m-2 rounded-full'
          type='text'
          placeholder='Image URL'
        />

        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          className='border-2 border-red-200 text-white text-lg px-3 py-2 m-2 rounded-full'
          type='text'
          placeholder='Enter role'
        />

        <input
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value);
          }}
          className='border-2 border-red-200 text-white text-lg px-3 py-2 m-2 rounded-full'
          type='text'
          placeholder='Enter description'
        />

        <button className='text-gray-800 text-xl bg-red-300 px-3 py-2 w-fit rounded-full cursor-pointer hover:scale-97 active:scale-90 '>
          Create User
        </button>

      </form>

      <div className='flex flex-wrap'>
        {allUsers.map((elem, idx) => <Card key={idx} idx={idx} elem={elem} deleteHandler={deleteHandler} />)}
      </div>

    </div>
  );
};

export default App;
