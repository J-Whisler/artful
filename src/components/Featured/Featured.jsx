import React from "react";
import "./Featured.scss";

import products from "../../data";

import FeaturedCard from "./FeaturedCard/FeaturedCard";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__header">
        <div className="featured__headerDiv"></div>
        <h2 className="featured__headerText">Featured Products</h2>
        <div className="featured__headerDiv"></div>
      </div>
      <div className="featured__cards">
        <FeaturedCard
          name={products[0].name}
          image={products[0].image}
          price={products[0].price}
          rating={products[0].rating}
          numReviews={products[0].numReviews}
          type={products[0].type}
        />
        <FeaturedCard
          name={products[3].name}
          image={products[3].image}
          price={products[3].price}
          rating={products[3].rating}
          numReviews={products[3].numReviews}
          type={products[3].type}
        />
        <FeaturedCard
          name={products[6].name}
          image={products[6].image}
          price={products[6].price}
          rating={products[6].rating}
          numReviews={products[6].numReviews}
          type={products[6].type}
        />
      </div>
    </div>
  );
};

export default Featured;
