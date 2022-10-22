import React, { useEffect, useState } from "react";
import './Products.css'

const Product = () => {
    const [product, setproduct] = useState([]);
    useEffect(() => {
      const fetchProduct = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        setproduct(data);
      };
      fetchProduct();
    }, []);
  return (
    <div className="Product-wrapper">
      {product.map((products) => (
        <div className="product-items" key={products.id}>
          <h2>{products.category}</h2>
          <img src={products.image} />
          <p>{products.title}</p>
          <h5>{products.price}</h5>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Product