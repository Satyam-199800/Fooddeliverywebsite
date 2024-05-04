import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductComponent() {
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams()

  useEffect( async () => {
       try{
        const response = await axios.get('https://fakestoreapi.com/products/${id}');
        setProduct(response.data);
        setLoading(false);
       } catch (err){
        console.log(err);
        setLoading(false);
       }
  }, []);
  return loading ? (
    <p>Loading</p>
  ) : ( 
        <>
          return ( 
        
             <div>
             <p>Title:{Product.title}</p>
             <img src={Product.image} height={200} width={200}></img>
             <p>Price: {Product.price}</p>
             </div>
          )

       </>
   
)
}
export default ProductComponent;
