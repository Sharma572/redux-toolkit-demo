import React, { useEffect, useState } from "react";
import './Products.css';
import {add} from '../Store/CartSlice';
import { useDispatch } from "react-redux";

const Product = () => {
    const [product, setproduct] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
      const fetchProduct = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        // console.log(data);
        setproduct(data);
      };
      fetchProduct();
    }, []);

    const addToCard=(product)=>{
     dispatch(add(product))
    }

  return (
    <div className="Product-wrapper">
      {product.map((products) => (
        <div className="product-items" key={products.id}>
          <h2>{products.category}</h2>
          <img src={products.image} />
          <p>{products.title}</p>
          <h5>{products.price}</h5>
          <button onClick={()=> addToCard(products)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Product