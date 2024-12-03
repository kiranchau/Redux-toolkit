import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/Cartslice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (ind) => {
    dispatch(remove(ind));
  };

  return (
    <div className="productsWrapper">
      {cartItems.length == 0 ? (
        <div>Loading...</div>
      ) : (
        cartItems.map((items, index) => (
          <div className="card" key={index}>
            <img src={items.image} alt="img" />
            <h4>{items.title}</h4>
            <h5>{items.price}</h5>
            <button className="btn" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
