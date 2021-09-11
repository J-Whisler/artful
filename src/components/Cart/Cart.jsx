import React from "react";
import "./Cart.scss";

import { useStateValue } from "../../context/StateProvider";
import CartCard from "./CartCard/CartCard";

const Cart = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="cart">
      {basket?.length === 0 ? (
        <h2 className="cart__emptyMessage">Cart is Empty</h2>
      ) : (
        <div className="cart__items">
          {basket.map((item) => (
            <CartCard
              product={item}
              key={item._id}
              name={item.name}
              image={item.image}
              type={item.type}
              price={item.price}
              rating={item.rating}
              numReviews={item.numReviews}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
