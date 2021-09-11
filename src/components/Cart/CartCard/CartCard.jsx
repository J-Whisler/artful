import React from "react";
import "./CartCard.scss";

const CartCard = ({ id, name, image, price, rating, numReviews, type }) => {
  return (
    <div className="cartCard">
      <div className="cartCard__left">
        <img src={image} alt={name} />
      </div>
      <div className="cartCard__middle">
        <h3>{name}</h3>
      </div>
      <div className="cartCard__right">Right</div>
    </div>
  );
};

export default CartCard;
