import React from "react";
import "../Portfolio/portfolio.scss";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ProjectXY from "../../images/projectXY.jpg";
import Quire from "../../images/Quire.png";
import DavidBerg from "../../images/AndersBerg.png";

const image = [
  { id: 0, src: ProjectXY, alt: "Project XY", width: "50%", height: "auto" },
  {
    id: 1,
    src: Quire,
    alt: "Quire notepad",
    width: "50%",
    "min-width": "300px",
    height: "auto"
  },
  {
    id: 2,
    src: DavidBerg,
    alt: "My second website DavidAnders",
    width: "50%",
    height: "auto"
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      {image.map((img, index) => (
        <div className="portfolio__content" key={index}>
          <img
            className="portfolio__content__image"
            alt={img.alt}
            src={img.src}
          />
          <div className="portfolio__container__right">hello</div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
