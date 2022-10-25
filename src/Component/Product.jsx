import React, { useEffect, useState } from "react";
import "./Products.css";
import { add } from "../Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../Store/ProductSlice";
import { STATUES } from "../Store/ProductSlice";

const Product = () => {
  const { data: product, Status } = useSelector((state) => state.product);
console.log(product,Status);
  const dispatch = useDispatch();
  useEffect(() => {
    // ----------------  THUNK ASYNC OPERATION     ------------------//
    dispatch(fetchProduct());

    // ----------------  NORMAL ASYNC OPERATION     ------------------//
    // const [product, setproduct] = useState([]);

    // const fetchProduct = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   // console.log(data);
    //   setproduct(data);
    // };
    // fetchProduct();
  }, []);

  const addToCard = (product) => {
    dispatch(add(product));
  };

  if (Status === STATUES.LOADING) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="Product-wrapper">
      {product.map((products) => (
        <div className="product-items" key={products.id}>
          <h2>{products.category}</h2>
          <img src={products.image} />
          <p>{products.title}</p>
          <h5>{products.price}</h5>
          <button onClick={() => addToCard(products)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
