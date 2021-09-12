import React from "react";
import "./CartCard.scss";

const CartCard = ({ id, name, image, price, rating, numReviews, type }) => {
  return (
    <div className="cartCard">
      <div className="cartCard__left">
        <img src={image} alt={name} />
      </div>
      <div className="cartCard__middle">
        <div className="cartCard__middleLeft">
          <h6>{type}</h6>
          <h3>{name}</h3>
          <h5>${price}</h5>
        </div>
        <div className="cartCard__middleRight">
          <div className="cartCard__MiddleRightRating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
          <h4>{numReviews} Reviews</h4>
        </div>
      </div>

      <div className="cartCard__right">
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
};

export default CartCard;
