import React from "react";
import "./qualities.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Qualities = () => (
  <div className="qualities">
    <h2 className="qualities__head">What I do</h2>

    <div className="qualities__box">
      <article className="qualities__boxes">
        <div className="qualities__boxes__content">
          <div>
            <p>
              <FontAwesomeIcon
                className="qualities__boxes__logo"
                icon={["fas", "pencil-alt"]}
              />
            </p>
            <header>
              <h3 className="qualities__boxes__head">Design</h3>
            </header>
          </div>
          <p>
            I have a great passion for web design where I focus on UX/UI-design. 
          </p>
        </div>
      </article>

      <article id="content" className="qualities__boxes">
        <div className="qualities__boxes__content">
          <div>
            <p>
            <FontAwesomeIcon
                className="qualities__boxes__logo"
                icon={["fas", "code"]}
              />
            </p>
            <header>
              <h3 className="qualities__boxes__head">Build</h3>
            </header>
          </div>
          <p>
            I build projects from scratch using React, NextJS, Vue and Vanilla
            JS.
          </p>
        </div>
      </article>

      <article className="qualities__boxes">
        <div className="qualities__boxes__content">
          <div>
            <p><FontAwesomeIcon
                className="qualities__boxes__logo"
                icon={["fas", "laptop-code"]}
              /></p>
            <header>
              <h3 className="qualities__boxes__head">Learn</h3>
            </header>
          </div>
          <p>
            I'm always striving to learn new ways to code and improve my skills.
          </p>
        </div>
      </article>
    </div>
  </div>
);

export default Qualities;
