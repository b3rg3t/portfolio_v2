import React from "react";
import "./hero.scss";
import LazyLoad from "react-lazyload";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <LazyLoad height={200}>
          <img
            className="hero__picture"
            src={require("../../images/profilblur.png")}
            alt="foggy forrest"
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Hero;
