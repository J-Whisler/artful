import React from "react";
import "./FeaturedCard.scss";

const FeaturedCard = ({ name, image, price, rating, numReviews, type }) => {
  return (
    <div className="featuredCard">
      <div className="featuredCard__top">
        <img className="featuredCard__topImg" src={image} alt="" />
      </div>
      <div className="featuredCard__bottom">
        <div className="featuredCard__bottom1">
          <p>{type}</p>
          <h3>{name}</h3>
        </div>
        <div className="featuredCard__bottom2">
          <h5>${price}</h5>
          <div className="featuredCard__bottom2Rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>

          <h6>{numReviews} reviews</h6>
        </div>
        <div className="featuredCard__bottom3">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
