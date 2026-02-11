import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [num, setNum] = useState(0)
  const [username, setUsername] = useState('')

  const getData = async () => {
    const response = await axios.get('https://randomuser.me/api/')
    setUsername(response.data.results[0].name.first + " " + response.data.results[0].name.last);
    console.log(response.data.results[0].name.first + " " + response.data.results[0].name.last);
  }


  useEffect(function(){
    getData()
  }, [num])

  return (
    <div>
      <h1>{username}</h1>
      <button onClick={() => {
        setNum(num+1)
      }}>Click Here to get user</button>

    </div>
  )
}

export default App