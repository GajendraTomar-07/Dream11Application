import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import SignupPage from './components/SignupPage';
import ProductCard from './components/ProductCard';

const RouterFile = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Header/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/productcard' element={<ProductCard />}/>
        </Routes>
      </Router>
    </>
  )
}

export default RouterFile;