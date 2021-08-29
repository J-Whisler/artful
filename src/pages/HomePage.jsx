import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomePage;
