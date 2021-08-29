import "./Hero.scss";
import HeroTopImg from "../assets/hero-left-img.jpg";

import HeroCard from "./HeroCard/HeroCard";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__top">
        <img src={HeroTopImg} alt="" />
      </div>
      <div className="hero__bottom">
        <HeroCard
          image="fas fa-pencil-ruler"
          title="Creative"
          description="Art, Photos, and Designs"
        />
        <HeroCard
          image="fas fa-dollar-sign"
          title="Inexpensive"
          description="Cost Efficient, High Quality wall decor"
        />
        <HeroCard
          image="fas fa-layer-group"
          title="Variety"
          description="Many different designs"
        />
      </div>
    </div>
  );
};

export default Hero;
