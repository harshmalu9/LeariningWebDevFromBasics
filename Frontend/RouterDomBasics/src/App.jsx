import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App