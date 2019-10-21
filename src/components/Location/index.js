import React from "react";
import "./location.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Location = () => (
  <div className="location">
    <div className="location__div">
      <FontAwesomeIcon
        className="location__icon"
        icon={["fas", "map-marker-alt"]}
      />
    </div>
  </div>
);

export default Location;
