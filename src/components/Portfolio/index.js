import React from "react";
import "../Portfolio/portfolio.scss";
import * as Icon from "react-feather";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { projects } from "./projects";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <div className="portfolio__content" key={index}>
          <img
            className="portfolio__content__image"
            alt={project.alt}
            src={project.src}
          />
          <div className="portfolio__container__right">
            <div className="portfolio__container__right__innerContainer">
              {
                <div>
                  <h3>{project.alt}</h3>
                  <span>{project.text}</span>
                </div>
              }
              <span>Status: {project.status}</span>
              <div className="portfolio__container__right__innerContainer__bottom">
                <a
                  className="portfolio__container__right__link"
                  href={project.github}
                  title="Github link"
                >
                  <Icon.GitHub className="navigation__container__icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
