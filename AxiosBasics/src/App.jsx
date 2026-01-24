import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = async () => {
    const data = await axios.get('https://picsum.photos/v2/list')
    console.log(data.data);
  }

  return (
    <div>
      <button onClick={getData}>Get data</button>
    </div>
  )
}

export default App