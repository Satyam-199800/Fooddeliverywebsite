
import React from 'react';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from '../Food Delivery App/LoginPage';
import Home from './Home';
import MenuPage from './MenuPage';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
const Router = () => {
   return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Menu" element={<MenuPage />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
    <Footer />
    </BrowserRouter>
   );
};
export default Router;