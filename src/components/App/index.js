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
import Location from "../Location";

//Lazyload
import LazyLoad from "react-lazyload";

//FontAwesome 
import '../fontawesome';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <div className="app__main">
          <div className="app__main__content">
            <main className="main">
              <LazyLoad height={"100vh"}>
                <div id="home" className="main__header">
                  <Header />
                </div>
              </LazyLoad>
              <LazyLoad height={200} offset={100}>
                <section className="main__top">
                  <Qualities />
                </section>
              </LazyLoad>
              <LazyLoad height={200} offset={200}>
                <section className="main__first">
                  <Skills />
                </section>
              </LazyLoad>
              <LazyLoad height={200} offset={100}>
                <section className="main__two">
                  <Information />
                </section>
              </LazyLoad>

              <section className="main__three">
                <Portfolio />
              </section>

              <LazyLoad height={200} offset={100}>
                <section className="main__fourth">
                  <Contact />
                </section>
              </LazyLoad>
              <LazyLoad height={200} offset={100}>
                <section className="main__fifth">
                <Location />
                </section>
              </LazyLoad>
            </main>
          </div>
          <LazyLoad height={200} offset={100}>
            <Footer />
          </LazyLoad>
        </div>
      </div>
    );
  }
}

export default App;
