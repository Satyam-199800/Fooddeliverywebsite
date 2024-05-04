import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './MenuPage.css';

const MenuPage = () => {
const [product, setProduct] = useState([]);
const [foodOnly, setFoodOnly] = useState([]);
const [beveragesOnly, setBeveragesOnly] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function getDataFromBackend() {
     try{
      const response = await axios.get('http://localhost:3001/api/product');
      console.log(response.data);
      setProduct(response.data);
      setFoodOnly(response.data.filter((item) => item.category === "food"));
      setBeveragesOnly(
        response.data.filter((item) => item.category === "beverages")
      );
      setLoading(false);
     } catch (err){
      console.log(err);
      setLoading(false);
     }
  }
  getDataFromBackend();
}, []);

return loading ? (
  <p>Loading</p>
) : ( 
    <>
    <div className='heading'>
      <h1>Our Menu</h1>
    </div>
      <div>
      <select name="" id="" onChange={(e) => {
    const value = e.target.value;
    if (value === "All") {
        setProduct(foodOnly.concat(beveragesOnly));
    } else if (value === "Foods") {
        setProduct(foodOnly);
    } else if (value === "Beverages") {
        setProduct(beveragesOnly);
    }
     }}>
    <option value="All">All</option>
    <option value="Foods">Foods</option>
    <option value="Beverages">Beverages</option>
</select>
      </div>
      <div className="food-list">
      {product.map((item) => {
        return (
          <div key={item.id} className="food">
            <img src={item.img} width="65%"  alt="" />
            <p className="food-name">{item.name}</p>
            <div className="food-footer">
              <span className="food-price">Rs. {item.price}</span>
              <span>Delivery free</span>
            </div>
            <NavLink>
            <button className="button">
              Add
            </button>
            </NavLink>
          </div>
        );
      })}
      
    </div>
      <div>
      <NavLink to='Cart'>
      <button>Go to cart</button>
      </NavLink>
      </div>
    </>
  );
};
export default MenuPage;

