import ProjectXY from "../../images/projectXY.jpg";
import Quire from "../../images/quire.jpg";
import DavidBerg from "../../images/davidAnders.jpg";
import KYH from "../../images/kyh.jpg";
import Grex from "../../images/grex.jpg";
import David from "../../images/davida.jpg";
import Proud from "../../images/prouda.jpg";
//properties
import React from "../../images/REACT.png";
import Firebase from "../../images/FIREBASE.png";

const projects = [
  {
    id: 0,
    original: ProjectXY,
    thumbnail: ProjectXY,
    originalAlt: "Project XY",
    thumbnailTitle: "Project XY",
    status: "build",
    text:
      "This a website for a swedish rockband that needs a new responsive website that works properly on mobile phones and tablets.",
    react: React,
    firebase: Firebase
  },
  {
    id: 1,
    original: Quire,
    thumbnail: Quire,
    originalAlt: "Quire notepad",
    originalTitle: "Quire notepad",
    github: "https://github.com/b3rg3t/leo_quire",
    status: "done",
    text:
      "Quire notepad was our first group project where we was introduced to the Agile workform. The project is made in vanilla js and works with local storage."
  },
  {
    id: 2,
    original: DavidBerg,
    thumbnail: DavidBerg,
    originalAlt: "David Anders",
    originalTitle: "David Anders",
    github: "https://github.com/b3rg3t/Portfolio",
    status: "done",
    website: "http://davidanders.se/other/",
    text:
      "This is my first bigger project I made in school and it is my first porfolio website. It is written in HTML, CSS and JavaScript. I did put a lot effort trying to make it responsive. It is a single page site."
  },
  {
    id: 3,
    original: KYH,
    thumbnail: KYH,
    originalAlt: "KYH",
    originalTitle: "KYH",
    status: "done",
    text: "KYH was our first task in school to make a landing page."
  },
  {
    id: 4,
    original: Grex,
    thumbnail: Grex,
    originalAlt: "Grex",
    thumbnailTitle: "Project XY",
    github: "https://github.com/b3rg3t/grex_candy",
    status: "done",
    text:
      "Grex was our first group project with React. Grex is supposed to be a training app to find like minded people that want to find training partners."
  },
  {
    id: 5,
    original: David,
    thumbnail: David,
    originalAlt: "David Berg",
    thumbnailTitle: "Project XY",
    github: "https://github.com/b3rg3t/grex_candy",
    status: "done",
    website: "http://davidanders.se/#/",
    text:
      "This was my very first project in react. It was a portfolio website and it was a fun way to start using react."
  },
  {
    id: 6,
    original: Proud,
    thumbnail: Proud,
    originalAlt: "Proud",
    thumbnailTitle: "Project XY",
    status: "build",
    github: "https://github.com/b3rg3t/vendre_proud",
    text:
      "Proud is a webb application to Slack that collects messages from your slack workspace channel where you want to praise a co-worker. You can send messages from Proud into a specific channel on Slack. Join different groups."
  }
];

export { projects };
