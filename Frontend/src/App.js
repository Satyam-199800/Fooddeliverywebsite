import logo from './logo.svg';
import React from 'react';
import Storecomponent from "./Storecomponent";
import ProductComponent from "./ProductComponent";
import{BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './Food Delivery App/LoginPage';
import Hero from './Food Delivery App/Hero';

const App = () => {
   return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Storecomponent />} />
      <Route path="/product/:id" element={<ProductComponent />} />
      <Route path="/hero" element={<Hero />} />
    </Routes>
    </BrowserRouter>
   );
};
export default App;
