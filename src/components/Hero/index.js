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
        <h2>Welcome</h2>
        {/* <h1 className="fixed-nav__logo">David Berg</h1> */}
        <p>
          {/* Are you looking for a front-end developer? */}
        </p>
      </div>
    </div>
  );
};

export default Hero;
