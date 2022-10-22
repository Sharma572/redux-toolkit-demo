import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/CartSlice';

const Cart = () => {
const dispatch = useDispatch();
  const productCart = useSelector((product)=> product.cart)
// console.log(productCart);

const removeFormCart=(cartItemId)=>{
dispatch(remove(cartItemId)) // We are sending payload to our remove function actions
}
  return (
    <div>
      <h1>Cart Items</h1>
      <div className="cartItems-Container">
        {productCart.map((cartItems) => {
          const { id, title, image, category, price } = cartItems;
          return (
            <div className="cart-card" style={{display:'flex',alignItems: 'center',justifyContent:'space-around'}} key={id}>
              <h2>{category}</h2>
              <img src={image} />
              <p>{title}</p>
              <h5>{price}</h5>
              <button onClick={() => removeFormCart(cartItems.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart