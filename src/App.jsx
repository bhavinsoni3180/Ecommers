import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Products from './pages/products'
import About from './pages/about'
import Contact from './pages/contact'
import Navbar from './components/navbar'
import Cart from './pages/cart'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
