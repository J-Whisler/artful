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
        <div className="featuredCard__bottom2"></div>
        <div className="featuredCard__bottom3"></div>
      </div>
    </div>
  );
};

export default FeaturedCard;
