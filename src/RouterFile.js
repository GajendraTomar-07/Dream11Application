import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import SignupPage from './components/SignupPage';

const RouterFile = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/home' element={<Header/>} />
        </Routes>
      </Router>
    </>
  )
}

export default RouterFile;