import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import api from '../src/api'
import { useState } from 'react'


import Cart from './components/pages/Cart'
import Fruta from './components/pages/Fruta'
import Header from '../src/components/header/Header'
//import styles from './pages/Fruta.module.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from './components/styles/App.module.css'






function App() {
  
  return (
    
    <Router>
      <Header/>

      <ul>
        <li  className={styles.link_cart}>
          <Link to='/cart'><AiOutlineShoppingCart/></Link>
        </li>

        <li className={styles.link_home}>
          <Link to='/'>Home</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/edit/:id' element={<Cart/>}></Route>
        <Route path='/' element={<Fruta />}></Route>
      </Routes>
    </Router>
  )

}







export default App;
