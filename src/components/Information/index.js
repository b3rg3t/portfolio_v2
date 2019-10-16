import React, { useState } from "react";
import "./information.scss";

const Information = () => {
  const [year, setYear] = useState("First");
  return (
    <div className="information">
      <div className="information__content">
        <h2 className="information__content__title">About me</h2>
        <p>
          At the moment I'm going to a Front-end Developer program at KYH,
          Stockholm. It's a 2 year program including 20 weeks internship at some
          company.
        </p>
        <div>
          <input
          // autoFocus
            type="button"
            className="information__content__button"
            onClick={() => setYear("First")}
            value="Year 1"
          />
          <input
            type="button"
            className="information__content__button"
            onClick={() => setYear("Second")}
            value="Year 2"
          />
          {year === "First" ? <YearOne /> : <YearTwo />}
        </div>
      </div>
    </div>
  );
};

const YearOne = () => {
  return (
    <div className="year">
      <h3 className="yearOne year__header">Year One</h3>
      <div className="year__content">
        <ul className="year__content__ul">
          <li>Arbetsmetodik för utvecklare, 20 yhp</li>
          <hr></hr>
          <li>Backend-utveckling, 40 yhp</li>
          <hr></hr>
          <li>HTML & CSS, 30 yhp</li>
          <hr></hr>
          <li>JavaScript, 110 yhp</li>
        </ul>
      </div>
    </div>
  );
};
const YearTwo = () => {
  return (
    <div className="year">
      <h3 className="year__header">Year Two</h3>
      <div className="year__content">
        <ul className="year__content__ul">
          <li>Grafiska verktyg för gränssnittsdesign, 25 yhp</li>
          <hr></hr>
          <li>User experience design(UX design), 35 yhp</li>
          <hr></hr>
          <li>LIA, 100 yhp</li>
          <hr></hr>
          <li>Examensarbete, 40 yhp</li>
        </ul>
      </div>
    </div>
  );
};

export default Information;
