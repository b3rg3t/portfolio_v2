import React from "react";
import "./information.scss";


const Information = () => {
  return (
    <div className="information">
      <div className="information__content">
        <h3 className="information__content__title">Progress in School</h3>
        <span>Period 11/11 2019 => 27/3 2020</span>
        {/* <FontAwesome
          className="super-crazy-colors"
          name="rocket"
          size="2x"
          spin
          style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
        /> */}
      </div>
    </div>
  );
};

export default Information;
