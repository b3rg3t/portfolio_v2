import React from "react";
import "../Portfolio/portfolio.scss";
import ImageGallery from "react-image-gallery";

import { projects } from "./projects";

const Portfolio = () => {
  return (
    <div className="portfolio">
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
