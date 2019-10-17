import React, { useState, useEffect } from "react";
import "../Navigation/navigation.scss";

import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import { links } from "./links";

const Navigation = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    console.log("useEffect ran");
    const el = document.querySelector(".nav");
    setTop(el.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [top]);

  return (
    <div>
      <div className="menu-wrap">
        <Link to="home">
          <h1 className="menu-wrap__header">David Berg</h1>
          <span className="menu-wrap__text">Front-end Developer</span>
        </Link>
      </div>
      <Hamburger />
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
            target="blank"
          >
            {/* <Icon.Share2 className="navigation__container__icons" /> */}
          </a>
          <a
            className="link"
            target="blank"
            href="https://github.com/b3rg3t"
            title="Github"
          >
            {/* <Icon.GitHub className="navigation__container__icons" /> */}
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/david-berg-385530175"
            title="Linkedin"
            target="blank"
          >
            {/* <Icon.Linkedin
              xlinkTitle="linked in"
              className="navigation__container__icons"
            /> */}
          </a>
        </div>
      </header>

      <nav>
        <div className="nav" id={scroll > top ? "fixed-nav" : ""}>
          <Link to="home">
            <h1 className="fixed-nav__logo">David Berg</h1>
          </Link>
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
                  <b>{link.label} </b>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState();
  const handleStateChange = state => {
    setMenuOpen(state.isOpen);
  };
  const closeMenu = () => {
    console.log("close menu ran");
    setMenuOpen(false);
  };
  return (
    <Menu
      right
      isOpen={menuOpen}
      onStateChange={state => handleStateChange(state)}
    >
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
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hamburger__links">
        <a
          className="link"
          href="https://www.facebook.com/davidberg1990"
          title="Share"
          target="blank"
        >
          {/* <Icon.Share2 className="navigation__container__icons" /> */}
        </a>
        <a
          className="link"
          target="blank"
          href="https://github.com/b3rg3t"
          title="Github"
        >
          {/* <Icon.GitHub className="navigation__container__icons" /> */}
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/david-berg-385530175"
          title="Linkedin"
          target="blank"
        >
          {/* <Icon.Linkedin
            xlinkTitle="linked in"
            className="navigation__container__icons"
          /> */}
        </a>
      </div>
    </Menu>
    // </div>
  );
};

export default Navigation;
