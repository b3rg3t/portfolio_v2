import React from "react";
import "./hero.scss";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <img
          className="hero__picture"
          src={require("../../images/profilblur.png")}
          alt="foggy forrest"
        />
      </div>
      <div className="hero__text">
        <h2 className="hero__text__header">Looking for a <span className="hero__text__bold">Front-end Developer</span>?</h2>
        <Link  to="contact">
          <button className="hero__text__button">
            Hit me up! <FontAwesomeIcon icon={["far", "paper-plane"]}/>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
