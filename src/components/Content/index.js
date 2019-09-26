import React from "react";
import "../Content/content.scss";

//Imports to content
import Portfolio from "../Portfolio";
import Qualities from "../Qualities";
import Skills from "../Skills";
import Contact from "../Contact";
import Topcontent from "../Topcontent";
import Header from "../Header";
import Location from "../Location";

const Content = () => (
  <main className="main"  >
    <header className="main__header">
      <Header id="home"/>
    </header>

    <div className="main__top">
      <Topcontent />
    </div>

    <div className="main__first">
      <Skills id="skills" />
    </div>

    <div className="main__two">
      <Qualities id="qualities"/>
    </div>

    <div className="main__three">
      <Portfolio id="portfolio"/>
    </div>

    <div className="main__fourth">
      <div className="main__fourth__left"></div>

      <div className="main__fourth__right">
        <Location id="location"/>
      </div>
    </div>
    <Contact id="contact"/>
  </main>
);

export default Content;
