import React, {useState}from "react";
import "../Portfolio/portfolio.scss";
import ImageGallery from "react-image-gallery";

import { projects } from "./projects";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState()
  const handleStateChange = state => {
    setCurrentIndex(state.currentIndex);
  };
  const showDescripion = () =>{
    console.log("showDesciption ran")
    
    var content = projects.map(proj => <h1>{proj}</h1>)
    var desContainer = document.querySelector(".portfolio__description");
    return desContainer.innerHTML = content
  }
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__container__head">Portfolio</h3>
      </div>
      <div className="portfolio__imageGallery">
        <ImageGallery
          onStateChange={state => handleStateChange(state)}
          items={projects}
          thumbnailPosition={"right"}
          lazyLoad={true}
          showPlayButton={false}
          showFullscreenButton={false}
          onClick={showDescripion}
        />
      </div>
      <div className="portfolio__description"></div>
    </div>
  );
};


export default Portfolio;
