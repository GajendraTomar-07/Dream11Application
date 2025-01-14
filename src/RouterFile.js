import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContainer from './components/MainContainer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Header from './components/Header'
import Products from './components/Products'
import AddtoCart from './components/AddtoCart';
import ProductCard from './components/ProductCard';
import HeroSection from './components/HeroSection';

export const RouterFile = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<MainContainer/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/heroSection' element={<HeroSection/>}/>
            <Route path='/products' element={<ProductCard/>} />
            <Route path='/AddtoCart' element={<AddtoCart/>} />
        </Routes>
    </Router>
  )
}
