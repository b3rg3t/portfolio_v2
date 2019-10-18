import React, { useState } from "react";
import "./information.scss";
import study from "../../images/study.webp";

const Information = () => {
  const [year, setYear] = useState("First");
  return (
    <div className="information">
      <div className="information__content">
        <h2 className="information__content__title">About me</h2>
        <div className="information__content__info">
          <div className="information__content__info__text">
            <p>
              My name is{" "}
              <span className="information__content__info__text__bold">
                David
              </span>{" "}
              and I´m a 28 year old dude originally from Linköping, Sweden. I
              moved to{" "}
              <span className="information__content__info__text__bold">
                Stockholm
              </span>{" "}
              in fall 2018 for studies. At the moment I'm going to a{" "}
              <span className="information__content__info__text__bold">
                Front-end Developer
              </span>{" "}
              program at{" "}
              <a
                target="blank"
                title="https://kyh.se/utbildningar/front-end-developer/"
                className="information__content__info__text__link"
                href="https://kyh.se/utbildningar/front-end-developer/"
              >
                KYH
              </a>
              , Stockholm. It's a 2 year program including 20 weeks internship.
              I will graduate in <span className="information__content__info__text__bold">May 2020</span>.
            </p>
          </div>
          <div className="information__content__info__boxes">
            <div className="information__content__info__boxes__left">
              <div className="plupp">
                <input
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
              </div>
              {year === "First" ? <YearOne /> : <YearTwo />}
            </div>
            <div className="information__content__info__boxes__right">
              <img
                className="information__content__info__boxes__box__image"
                src={study}
                alt="study react"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const YearOne = () => {
  return (
    <div className="year">
      <h3 className="year__header">Year One</h3>
      <div className="year__content">
        <ul className="year__content__ul">
          <li>
            Arbetsmetodik för utvecklare, 20 yhp
            <br></br>
            <hr></hr>
          </li>
          <li>
            Backend-utveckling, 40 yhp
            <br />
            <hr />
          </li>
          <li>
            HTML & CSS, 30 yhp
            <br />
            <hr />
          </li>
          <li>
            JavaScript, 110 yhp
            <br />
            <hr />
          </li>
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
          <li>
            Grafiska verktyg för gränssnittsdesign, 25 yhp
            <br />
            <hr />
          </li>
          <li>
            User experience design(UX design), 35 yhp
            <br />
            <hr />
          </li>
          <li>
            LIA, 100 yhp
            <br />
            <hr />
          </li>
          <li>Examensarbete, 40 yhp</li>
        </ul>
      </div>
    </div>
  );
};

export default Information;
