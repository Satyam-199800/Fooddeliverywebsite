import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Storecomponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataFromBackend() {
       try{
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        setData(response.data);
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
      {data.map((item) => {
          return(
          <>
             <div className="App">
             <p>Title:{item.title}</p>
             <img src={item.image} height={200} width={200}></img>
             <p>Price: {item.price}</p>
             <NavLink to={"product/$(product.id)"}>
             <button>Buy Now</button>
             </NavLink>
             </div>
          </>
          )})
}
       
   </>
)
}
export default Storecomponent;
