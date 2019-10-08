import React, { useState, useEffect } from "react";
import "../Portfolio/portfolio.scss";
import ImageGallery from "react-image-gallery";
import * as Icon from "react-feather";

import { projects } from "./projects";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const SetState = index => {
    setCurrentIndex(index);
  };
  const ShowDescripion = () => {
    console.log("showDesciption ran");
    var project = projects.filter(project => {
      return project.id === currentIndex ? project : null;
    });
    return (
      <div className="showDescription">
        {project
          ? project.map((proj, index) => (
              <div key={index} className="showDescription__container">
                <h4>{proj.originalAlt}</h4>
                <p>{proj.text}</p>
                <div className="showDescription__container__links">
                  {proj.github ? (
                    <div>
                      <span>Github: </span>
                      <a
                        className="link"
                        href={proj.github}
                        title="Github repo"
                      >
                        <Icon.GitHub className="navigation__container__icons" />
                      </a>
                    </div>
                  ) : (
                    <div>
                      <span>Github: </span> <Icon.X />
                    </div>
                  )}
                  {proj.website ? (
                    <div>
                      <span>Website: </span>
                      <a
                        className="link"
                        href={proj.website}
                        title={proj.originalAlt}
                      >
                        <Icon.ExternalLink className="navigation__container__icons" />
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            ))
          : null}
      </div>
    );
  };
  useEffect(() => {
    ShowDescripion();
  });
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__container__head">Portfolio</h3>
      </div>
      <div className="portfolio__imageGallery">
        <div className="portfolio__imageGallery__pictures">
          <ImageGallery
            items={projects}
            thumbnailPosition={"right"}
            lazyLoad={true}
            showPlayButton={false}
            showFullscreenButton={false}
            onSlide={index => SetState(index)}
            onThumbnailClick={(e, index) => SetState(index)}
          />
        </div>
        <div className="portfolio__imageGallery__description">
          <ShowDescripion />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
