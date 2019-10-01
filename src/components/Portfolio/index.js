import React from "react";
import "../Portfolio/portfolio.scss";
import * as Icon from "react-feather";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ProjectXY from "../../images/projectXY.jpg";
import Quire from "../../images/Quire.png";
import DavidBerg from "../../images/AndersBerg.png";

const image = [
  {
    id: 0,
    src: ProjectXY,
    alt: "Project XY",
    text: "This is a website",
    width: "50%",
    height: "auto",
    github: "https://github.com/b3rg3t/leo_quire"
  },
  {
    id: 1,
    src: Quire,
    alt: "Quire notepad",
    text: "This is a website",
    width: "50%",
    "min-width": "300px",
    height: "auto",
    github: "https://github.com/b3rg3t/leo_quire"
  },
  {
    id: 2,
    src: DavidBerg,
    alt: "My second website DavidAnders",
    text: "This is a website",
    width: "50%",
    height: "auto",
    github: "https://github.com/b3rg3t/leo_quire"
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
          <div className="portfolio__container__right">
            {<div><h3>{img.alt}</h3><span>{img.text}</span></div>}
            <a href={img.github} title="Github link">
              <Icon.GitHub className="navigation__container__icons" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
