import React, { Component } from "react";
import "./App.scss";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Content from "../Content";

// Content in page
// Navigation
const LINKS = [
  { label: "Home", to: "#home" },
  { label: "Skills", to: "#skills" },
  { label: "Qualities", to: "#qualities" },
  { label: "Portfolio", to: "#portfolio" },
  { label: "Website", to: "https://www.davidanders.se/" },
  { label: "Contact", to: "#contact" }
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation links={LINKS} />
        <div className="app__main">
          <div className="app__main__content">
            <Content />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
