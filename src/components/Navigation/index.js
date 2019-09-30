import React from "react";
import "../Navigation/navigation.scss";
import * as Icon from "react-feather";
import { Link } from "react-scroll";
// import { slide as Menu } from 'react-burger-menu'

// export class Example extends React.Component {
//   showSettings (event) {
//     event.preventDefault();
//   }

//   render () {
//     return (
//       <Menu>
//         <a id="home" className="menu-item" href="/">Home</a>
//         <a id="about" className="menu-item" href="/about">About</a>
//         <a id="contact" className="menu-item" href="/contact">Contact</a>
//         <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
//       </Menu>
//     );
//   }
// }

const Navigation = ({ links }) => {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__pic">
          <img
            className="navigation__picture"
            src={require("../../images/profilblur.png")}
            alt="foggy forrest"
          />
        </div>
      </div>
      <div className="navigation__container">
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
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
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
    </nav>
  );
};

export default Navigation;
