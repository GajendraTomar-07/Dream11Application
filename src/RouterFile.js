import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContainer from './components/MainContainer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Header from './components/Header'
import Products from './components/Products'
import AddtoCart from './components/AddtoCart';

export const RouterFile = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/products' element={<Products/>} />
            <Route path='/AddtoCart' element={<AddtoCart/>} />
        </Routes>
    </Router>
  )
}
