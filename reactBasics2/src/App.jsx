import React from 'react'
import Card from './components/Card'

const App = () => {

  const users = ['Harsh', 'Batman', 'Spiderman', 'Ironman']

  return (
    <div className='p-10 h-screen bg-black'>
      {
        users.map(function(user){
          return <Card username={user} age={21}/>
        })
      }
    </div>
  )
}

export default App