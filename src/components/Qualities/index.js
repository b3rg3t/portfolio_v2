import React from "react";
import "./qualities.scss";
import * as Icon from "react-feather";
const Qualities = () => (
  <div className="qualities">
    <article className="qualities__boxes">
      <div className="qualities__boxes__content">
        <header>
          <p><Icon.Edit className="qualities__boxes__logo" /></p>
          <h4 className="qualities__boxes__head">Design</h4>
        </header>
        <p>I have a passion for web Design</p>
      </div>
    </article>
    <article className="qualities__boxes">
      <div className="qualities__boxes__content">
        <header>
          <div>
            <p><Icon.Code className="qualities__boxes__logo" /></p>
            <h4 className="qualities__boxes__head">Build</h4>
          </div>
        </header>
        <p>I build projects from scratch</p>
      </div>
    </article>
    <article className="qualities__boxes">
      <div className="qualities__boxes__content">
        <header>
          <div>
            <p><Icon.Monitor className="qualities__boxes__logo" /></p>
            <h4 className="qualities__boxes__head">Learn</h4>
          </div>
        </header>
        <p>I always want to learn more</p>
      </div>
    </article>
  </div>
);

export default Qualities;
