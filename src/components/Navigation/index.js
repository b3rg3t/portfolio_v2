import React, { useState, useEffect } from "react";
import "../Navigation/navigation.scss";

import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import { links } from "./links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(60);

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
          <span className="navigation__header__logo2">
            <b>Front-End Developer</b>
          </span>
        </div>
        <div className="navigation__center"></div>
        <div className="navigation__container">
          <a
            className="link"
            target="blank"
            href="https://github.com/b3rg3t"
            title="Github"
          >
            <FontAwesomeIcon
              className="navigation__container__icons"
              icon={["fab", "github"]}
            />
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/david-berg-385530175"
            title="Linkedin"
            target="blank"
          >
            <FontAwesomeIcon
              className="navigation__container__icons"
              icon={["fab", "linkedin"]}
            />
          </a>
        </div>
      </header>

      <nav>
        <div className="nav" id={scroll > top ? "fixed-nav" : ""}>
          <ul>
            {links.map(link => (
              <li key={link.to} className="navigation__container__link">
                <Link
                  className="navigation__container__link  "
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
        {/* <a
          className="link"
          href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com"
          title="Share"
          target="blank"
        >
          <FontAwesomeIcon
            className="navigation__container__icons"
            icon={["fas", "share-alt-square"]}
          />
        </a> */}
        <a
          className="link"
          target="blank"
          href="https://github.com/b3rg3t"
          title="Github"
        >
          <FontAwesomeIcon
            className="navigation__container__icons"
            icon={["fab", "github"]}
          />
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/david-berg-385530175"
          title="Linkedin"
          target="blank"
        >
          <FontAwesomeIcon
            className="navigation__container__icons"
            icon={["fab", "linkedin"]}
          />
        </a>
      </div>
    </Menu>
    // </div>
  );
};

export default Navigation;
