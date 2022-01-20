import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import api from './api'
import { useState } from 'react'


import Cart from './pages/Cart'
import Fruta from './pages/Fruta'
import Header from './Header'
//import styles from './pages/Fruta.module.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from './App.module.css'






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

        <Route path='/' element={<Fruta />}></Route>
      </Routes>
    </Router>
  )

}







export default App;
