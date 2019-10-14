import React, { useState } from "react";
import "../Portfolio/portfolio.scss";
import ImageGallery from "react-image-gallery";

import { projects } from "./projects";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const SetState = index => {
    setCurrentIndex(index);
  };
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__container__head">Portfolio</h3>
      </div>
      <div className="portfolio__imageGallery">
        <div className="portfolio__imageGallery__pictures">
          <ImageGallery
            items={projects}
            // thumbnailPosition={"right"}
            lazyLoad={true}
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
              <h4>{proj.originalAlt}</h4>
              <p>{proj.text}</p>
              <Properties project={project} />
              <div className="showDescription__container__links">
                {proj.status ? (
                  <div className="showDescription__container__link">
                    <span>Status: </span>
                    <span>
                      {proj.status === "build" ? (
                        <i
                          className="fas fa-tools"
                          title="Under construction"
                        ></i>
                      ) : (
                        <i className="fas fa-check-circle" title="Done"></i>
                      )}
                    </span>
                  </div>
                ) : null}
                {proj.github ? (
                  <div className="showDescription__container__link">
                    <span>Repository: </span>
                    <a
                      className="link"
                      target="blank"
                      href={proj.github}
                      title="Github repo"
                    >
                      <i className="fab fa-github" title="Github"></i>
                    </a>
                  </div>
                ) : (
                  <div className="showDescription__container__link">
                    <span>Repository: </span>
                    <i className="fas fa-times" title="None"></i>
                  </div>
                )}
                {proj.website ? (
                  <div className="showDescription__container__link">
                    <span>Website: </span>
                    <a
                      className="link"
                      href={proj.website}
                      title={proj.originalAlt}
                      target="blank"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                ) : (
                  <div className="showDescription__container__link">
                    <span>Website: </span>{" "}
                    <i className="fas fa-times" title="None"></i>
                  </div>
                )}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

const Properties = project => {
  console.log(project);
  const p = { ...project };
  console.log(p);
  return (
    <div>
      {/* {project ? (
        project.map((proj, index) => proj.properties)
      ) : (
        <span>då</span>
      )} */}
    </div>
  );
};
export default Portfolio;
