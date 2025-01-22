import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContainer from './components/MainContainer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AddtoCart from './components/AddtoCart';
import ProductCard from './components/ProductCard';
import HeroSection from './components/HeroSection';
import ProductDetails from './components/ProductDetails';
import RazorpayPage from './components/RazorpayPage';
import Modal from './components/MaterialRatesModal';


export const RouterFile = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route path="/HeroSection" element={<HeroSection />} /> 
          <Route path="products" element={<ProductCard />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/addtocart/:id" element={<AddtoCart />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/Razorpaypage" element={<RazorpayPage/>} />
        <Route path="/Modal" element={<Modal/>} />

      </Routes>
    </Router>
  );
};
