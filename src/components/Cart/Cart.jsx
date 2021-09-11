import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import CartCard from "./CartCard/CartCard";

const Cart = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="cart">
      {basket?.length === 0 ? (
        <div className="cart__empty">
          <h4 className="cart__emptyMessage">YOUR CART IS EMPTY!</h4>
          <h6 className="cart__emptySecondMessage">
            Click button below to see our full shop
          </h6>
          <Link className="cart__emptyButton" to="/shop">
            See Full Shop
          </Link>
        </div>
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
