import React from "react";
import "./qualities.scss";
import * as Icon from "react-feather";
const Qualities = () => (
  <div className="qualities">
    <h2 className="qualities__head">Qualities</h2>

    <div className="qualities__box">
      <article className="qualities__boxes">
        <div className="qualities__boxes__content">
          <div>
            <p>
              <Icon.Edit className="qualities__boxes__logo" />
            </p>
            <header>
              <h4 className="qualities__boxes__head">Design</h4>
            </header>
          </div>
          <p>
            I have a great passion for web design where I start by building
            prototypes in Adobe XD
          </p>
        </div>
      </article>

      <article className="qualities__boxes">
        <div className="qualities__boxes__content">
          <div>
            <p>
              <Icon.Code className="qualities__boxes__logo" />
            </p>
            <header>
              <h4 className="qualities__boxes__head">Build</h4>
            </header>
          </div>
          <p>I build projects from scratch using React, Vue and Vanilla JS</p>
        </div>
      </article>

      <article className="qualities__boxes">
        <div className="qualities__boxes__content">
          <div>
            <p>
              <Icon.Monitor className="qualities__boxes__logo" />
            </p>
            <header>
              <h4 className="qualities__boxes__head">Learn</h4>
            </header>
          </div>
          <p>
            I'm always striving to learn new ways to code and improve my skills
          </p>
        </div>
      </article>
    </div>
  </div>
);

export default Qualities;
