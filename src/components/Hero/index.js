import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <img
          className="hero__picture"
          src={require("../../images/profilblur.png")}
          alt="foggy forrest"
        />
        <p>
          Check out my projects and leave a message if you want to get in
          contact with me att the bottom of the page!
        </p>
      </div>
    </div>
  );
};

export default Hero;
