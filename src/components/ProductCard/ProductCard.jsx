import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
const ProductCard = ({ name, image, price, rating, numReviews, type }) => {
  return (
    <div className="productCard">
      <div className="productCard__top">
        <img className="productCard__topImg" src={image} alt="" />
      </div>
      <div className="productCard__bottom">
        <div className="productCard__bottom1">
          <p>{type}</p>
          <h3>{name}</h3>
        </div>
        <div className="productCard__bottom2">
          <h5>${price}</h5>
          <div className="productCard__bottom2Rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>

          <h6>{numReviews} reviews</h6>
        </div>
        <div className="productCard__bottom3">
          <button>Add to Cart</button>
          <Link className="productCard__bottom3Link" to="/shop">
            See Full Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
