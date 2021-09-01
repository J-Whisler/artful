import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <Navbar />
      <Hero />
      <Featured />
    </div>
  );
};

export default HomePage;
