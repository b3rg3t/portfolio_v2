import React, { useState, useEffect } from "react";
import "../Portfolio/portfolio.scss";
import ImageGallery from "react-image-gallery";
// import * as Icon from "react-feather";

import { projects } from "./projects";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const SetState = index => {
    setCurrentIndex(index);
  };
  // var projectSpread = { ...projects };
  // var res = Object.keys(projectSpread).map(k => {
  //   return [projectSpread[k]];
  // });

  // console.log(res);
  const showDescripion = () => {
    console.log("showDesciption ran");
    var content = projects.map(proj => {
      if (proj.id === currentIndex) {
        return proj.description + " " + proj.github;
      } else {
      }
    });
    var desContainer = document.querySelector(".portfolio__description");
    return (desContainer.innerHTML = content);
  };
  useEffect(() => {
    showDescripion();
  });
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__container__head">Portfolio</h3>
      </div>
      <div className="portfolio__imageGallery">
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
      <div
        className="portfolio__description"
        onClick={e => console.log(e.target)}
      ></div>
    </div>
  );
};

export default Portfolio;
