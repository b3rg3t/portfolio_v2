import React from "react";
import "../Footer/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <p className="credits">Hope you enjoyed my site!</p>
    </div>
    <div className="footer__container">
      <a
        className="link"
        target="blank"
        href="https://github.com/b3rg3t"
        title="Github"
      >
        <FontAwesomeIcon
          className="footer__container__icons"
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
          className="footer__container__icons"
          icon={["fab", "linkedin"]}
        />
      </a>
    </div>

    <p className="credits">© copywright twentyninteen</p>
  </footer>
);

export default Footer;
