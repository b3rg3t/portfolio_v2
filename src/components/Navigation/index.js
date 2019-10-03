import React, { useState, useEffect } from "react";
import "../Navigation/navigation.scss";
import * as Icon from "react-feather";
import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import { links } from "./links";

const Navigation = () => {
  // const [height, setHeigt] = useState(null);
  const [scroll, setScroll] = useState(null);
  const [top, setTop] = useState(null);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    console.log("useEffect ran");
    const el = document.querySelector("nav");
    setTop(el.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* <div className="navigation__container__fullscreen"> */}
        <Hamburger />
      {/* </div>   */}
      <header className="header">
        <div className="navigation__header">
          <h1 className="navigation__header__logo">David Berg</h1>
        </div>
        <div className="navigation__center">
          <span>
            <b>Front-End Developer</b>
          </span>
        </div>
        <div className="navigation__container">
          <a
            className="link"
            href="https://www.facebook.com/davidberg1990"
            title="Share"
          >
            <Icon.Share2 className="navigation__container__icons" />
          </a>
          <a className="link" href="https://github.com/b3rg3t" title="Github">
            <Icon.GitHub className="navigation__container__icons" />
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/david-berg-385530175"
            title="Linkedin"
          >
            <Icon.Linkedin
              xlinkTitle="linked in"
              className="navigation__container__icons"
            />
          </a>
        </div>
      </header>
      <div className="navigation__container__fullscreen">
        <nav className={scroll > top ? "fixed-nav" : ""}>
          <ul>
            {links.map(link => (
              <li key={link.to} className="navigation__container__link">
                <Link
                  to={link.id}
                  offset={-70}
                  duration={200}
                  spy={true}
                  smooth={true}
                >
                  <b>{link.label}</b>
                </Link>
                {/* <span>|</span> */}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
const Hamburger = () => {
  return (
    <Menu right>
      <div className="hamburger">
        <ul className="hamburger__ul">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.id}
                offset={-70}
                duration={200}
                spy={true}
                smooth={true}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Menu>
  );
};

export default Navigation;
