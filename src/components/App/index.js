import React, { Component } from "react";
import "./App.scss";
import Navigation from "../Navigation";
import Footer from "../Footer";

//Imports to content
import Portfolio from "../Portfolio";
import Qualities from "../Qualities";
import Skills from "../Skills";
import Contact from "../Contact";
import Information from "../Information";
import Header from "../Hero";
// import Location from "../Location";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <div className="app__main">
          <div className="app__main__content">
            <main className="main">
              <div id="home" className="main__header">
                <Header />
              </div>

              <section className="main__top">
                <Qualities />
              </section>

              <section id="skills" className="main__first">
                <Skills />
              </section>

              <section id="information" className="main__two">
                <Information />
              </section>

              <section id="portfolio" className="main__three">
                <Portfolio />
              </section>

              <section id="contact" className="main__fourth">
                <Contact id="contact" />
              </section>

            </main>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
