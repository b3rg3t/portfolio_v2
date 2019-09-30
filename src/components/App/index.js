import React, { Component } from "react";
import "./App.scss";
import Navigation from "../Navigation";
import Footer from "../Footer";

//Imports to content
import Portfolio from "../Portfolio";
import Qualities from "../Qualities";
import Skills from "../Skills";
import Contact from "../Contact";
import Topcontent from "../Topcontent";
import Header from "../Header";
import Location from "../Location";

// Navigation
const LINKS = [
  { id: "home", label: "Home", to: "#home" },
  { id: "skills", label: "Skills", to: "#skills" },
  { id: "qualities", label: "Qualities", to: "#qualities" },
  { id: "portfolio", label: "Portfolio", to: "#portfolio" },
  { id: "contact", label: "Contact", to: "#contact" },
  { id: "location", label: "Location", to: "#location" }
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation links={LINKS} />
        <div className="app__main">
          <div className="app__main__content">
            <main className="main">
              <header id="home" className="main__header">
                <Header />
              </header>

              <div className="main__top">
                <Topcontent />
              </div>

              <div id="skills" className="main__first">
                <Skills />
              </div>

              <div id="qualities" className="main__two">
                <Qualities  />
              </div>

              <div id="portfolio" className="main__three">
                <Portfolio  />
              </div>

              <div className="main__fourth">
                <div className="main__fourth__left"></div>

                <div id="location" className="main__fourth__right">
                  <Location  />
                </div>
              </div>
              <Contact id="contact" />
            </main>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
