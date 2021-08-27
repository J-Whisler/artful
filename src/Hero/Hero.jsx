import React from "react";
import "./Hero.scss";

import HeroLeftImg from "../assets/hero-left-img.jpg";
import HeroBgVideo from "../assets/hero-bg-video.mov";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__contentLeft">
          left
          {/* <img className="hero__bg" src={HeroLeftImg} alt="" /> */}
        </div>
        <div className="hero__contentRight">Right</div>
      </div>
    </div>
  );
};

export default Hero;
