import React from "react";
import "../Portfolio/portfolio.scss";
import ImageGallery from "react-image-gallery";

import { projects } from "./projects";

const Portfolio = () => {
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
        />
      </div>
    </div>
  );
};


export default Portfolio;
