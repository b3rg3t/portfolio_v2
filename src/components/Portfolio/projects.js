import ProjectXY from "../../images/projectXY.webp";
import Quire from "../../images/quire.webp";
import DavidBerg from "../../images/davidAnders.webp";
import KYH from "../../images/kyh.webp";
import Grex from "../../images/grex.webp";
import David from "../../images/davida.webp";
import Proud from "../../images/prouda.webp";
//Thumbnail photos
import ProjectXYSmall from "../../images/projectXYSmall.webp";
import QuireSmall from "../../images/quireSmall.webp";
import DavidBergSmall from "../../images/davidAndersSmall.webp";
import KYHSmall from "../../images/kyhSmall.webp";
import GrexSmall from "../../images/grexSmall.webp";
import DavidSmall from "../../images/davidaSmall.webp";
import ProudSmall from "../../images/proudaSmall.webp";

//properties
import React from "../../images/REACT.png";
import Firebase from "../../images/FIREBASE.png";

const projects = [
  {
    id: 0,
    original: ProjectXY,
    thumbnail: ProjectXYSmall,
    originalAlt: "Project XY",
    thumbnailTitle: "Project XY",
    thumbnailAlt: "Project XY",
    status: "build",
    text:
      "This a website for a swedish rockband that needs a new responsive website that works properly on mobile phones and tablets.",
    react: React,
    firebase: Firebase
  },
  {
    id: 1,
    original: Quire,
    thumbnail: QuireSmall,
    originalAlt: "Quire notepad",
    originalTitle: "Quire notepad",
    thumbnailAlt: "Quire",
    github: "https://github.com/b3rg3t/leo_quire",
    status: "done",
    text:
      "Quire notepad was our first group project where we was introduced to the Agile workform. The project is made in vanilla js and works with local storage."
  },
  {
    id: 2,
    original: DavidBerg,
    thumbnail: DavidBergSmall,
    originalAlt: "David Anders Berg",
    originalTitle: "David Anders Berg",
    thumbnailAlt: "David Anders Berg",
    github: "https://github.com/b3rg3t/Portfolio",
    status: "done",
    website: "http://davidanders.se/other/",
    text:
      "This is my first bigger project I made in school and it is my first porfolio website. It is written in HTML, CSS and JavaScript. I did put a lot effort trying to make it responsive. It is a single page site."
  },
  {
    id: 3,
    original: KYH,
    thumbnail: KYHSmall,
    originalAlt: "KYH",
    originalTitle: "KYH",
    thumbnailAlt: "KYH",
    status: "done",
    text: "KYH was our first task in school to make a landing page."
  },
  {
    id: 4,
    original: Grex,
    thumbnail: GrexSmall,
    originalAlt: "Grex",
    thumbnailTitle: "Grex",
    thumbnailAlt: "Grex",
    github: "https://github.com/glindberg/grex_candy",
    status: "done",
    text:
      "Grex was our first group project with React. Grex is supposed to be a training app to find like minded people that want to find training partners."
  },
  {
    id: 5,
    original: David,
    thumbnail: DavidSmall,
    originalAlt: "David Berg",
    thumbnailTitle: "David Berg",
    thumbnailAlt: "David Berg",
    github: "https://github.com/b3rg3t/grex_candy",
    status: "done",
    website: "http://davidanders.se/#/",
    text:
      "This was my very first project in react. It was a portfolio website and it was a fun way to start using react."
  },
  {
    id: 6,
    original: Proud,
    thumbnail: ProudSmall,
    originalAlt: "Proud",
    thumbnailTitle: "Proud",
    thumbnailAlt: "Proud",
    status: "build",
    github: "https://github.com/b3rg3t/vendre_proud",
    text:
      "Proud is a webb application to Slack that collects messages from your slack workspace channel where you want to praise a co-worker. You can send messages from Proud into a specific channel on Slack. Join different groups."
  }
];

export { projects };
