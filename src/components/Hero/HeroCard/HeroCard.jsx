import React from "react";
import "./HeroCard.scss";
import { Link } from "react-router-dom";

const HeroCard = ({ image, title, description }) => {
  return (
    <div className="heroCard">
      <div className="heroCard__top">
        <div className="heroCard__topDiv"></div>
        <i className={image}></i>
        <div className="heroCard__topDiv"></div>
      </div>
      <div className="heroCard__bottom">
        <h5 className="heroCard__bottomTitle">
          {title}
          <div className="heroCard__bottomDots">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </h5>

        <p className="heroCard__bottomDescription">{description}</p>
        <Link className="heroCard__bottomButton" to="/shop">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroCard;
