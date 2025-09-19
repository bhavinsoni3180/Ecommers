import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<home/>} />
        <Route path='/about' element={<about/>} />
        <Route path='/products' element={<products/>} />
        <Route path='/contact' element={<contact/>} />
        <Route path='/cart' element={<cart/>} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
