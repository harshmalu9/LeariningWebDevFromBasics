import React, { useState } from 'react';
import UserCard from './components/UserCard';

const App = () => {
  const [title, setTitle] = useState('');
  const [phn, setPhn] = useState('')
  const [users, setUsers] = useState([])

const submitHandler = (e) => {
  e.preventDefault();

  const oldUsers = [...users]
  oldUsers.push({title, phn})

  console.log(oldUsers);
  setUsers(oldUsers)

  setTitle('');
  setPhn('');
};


  return (
    <div className='bg-gray-500 h-screen'>
      <form
        onSubmit={submitHandler}
        className='top-0 left-0 w-full bg-white p-4 shadow flex gap-3 items-center'
      >
        <input
          type='text'
          placeholder='Enter your name'
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          className='border px-3 py-2 rounded w-48'
        />

        <input
          type='text'
          placeholder='Enter your phone number'
          value={phn}
          required
          onChange={(e) => setPhn(e.target.value)}
          className='border px-3 py-2 rounded w-56'
        />

        <button
          type='submit'
          className='bg-gray-700 text-white px-4 py-2 rounded'
        >
          Submit
        </button>
      </form>

      {/* {users.map(function(elem, idx){
        // return <div key={idx}>
        //   <h4>{elem.title}</h4> 
        //   <p>{elem.phn}</p>
        // </div>
        return <UserCard key={idx} title={elem.title} phn={elem.phn}/>
      })} */}

      <div className='flex flex-wrap gap-2'>
        {/* {users.map(function(elem, idx){
          return <UserCard key={idx} title={elem.title} phn={elem.phn}/>
        })} */}
        {users.map((elem, idx) => <UserCard key={idx} phn={elem.phn} title={elem.title} />)}
      </div>
    </div>
  );
};

export default App;
