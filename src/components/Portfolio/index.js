import React, { useState } from "react";
import "../Portfolio/portfolio.scss";
import ImageGallery from "react-image-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "./projects";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const SetState = index => {
    setCurrentIndex(index);
  };
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__container__head">Portfolio</h2>
      </div>
      <div className="portfolio__imageGallery">
        <div className="portfolio__imageGallery__pictures">
            <ImageGallery
              items={projects}
              showPlayButton={false}
              showFullscreenButton={false}
              onSlide={index => SetState(index)}
              onThumbnailClick={(e, index) => SetState(index)}
            />
        </div>

        <div className="portfolio__imageGallery__description">
          <ShowDescripion currentIndex={currentIndex} />
        </div>
      </div>
    </div>
  );
};

const ShowDescripion = ({ currentIndex }) => {
  console.log("showDesciption ran");
  var project = projects.filter(project => {
    return project.id === currentIndex ? project : null;
  });
  return (
    <div className="showDescription">
      {project
        ? project.map((proj, index) => (
            <div key={index} className="showDescription__container">
              <h4 className="showDescription__container__header">{proj.originalAlt}</h4>
              <p className="showDescription__container__text">{proj.text}</p>

              <img
                className=""
                src={proj.react}
                alt={proj.react}
                width="50px"
              />
              <div className="showDescription__container__links">
                {proj.status ? (
                  <div className="showDescription__container__link">
                    <p className="showDescription__container__description">Status: </p>
                    <span>
                      {proj.status === "build" ? (
                        <FontAwesomeIcon className="icons tools" icon={["fas", "tools"]} />
                      ) : (
                        <FontAwesomeIcon className="icons check-square" icon="check-square" />
                      )}
                    </span>
                  </div>
                ) : null}
                {proj.github ? (
                  <div className="showDescription__container__link">
                    <p className="showDescription__container__description">Repository: </p>
                    <a
                      className="link"
                      target="blank"
                      href={proj.github}
                      title="Github repo"
                    >
                      <FontAwesomeIcon className="icons" icon={["fab", "github"]} />
                    </a>
                  </div>
                ) : (
                  <div className="showDescription__container__link">
                    <p className="showDescription__container__description">Repository: </p>
                    <span><FontAwesomeIcon className="icons" icon={["fas", "times"]} /></span>
                  </div>
                )}
                {proj.website ? (
                  <div className="showDescription__container__link">
                    <p className="showDescription__container__description">Website: </p>
                    <a
                      className="link"
                      href={proj.website}
                      title={proj.originalAlt}
                      target="blank"
                    >
                      <FontAwesomeIcon className="icons" icon={["fas", "external-link-alt"]} />
                    </a>
                  </div>
                ) : (
                  <div className="showDescription__container__link">
                    <p className="showDescription__container__description">Website: </p>
                    <span><FontAwesomeIcon className="icons" icon={["fas", "times"]} /></span>
                  </div>
                )}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Portfolio;
