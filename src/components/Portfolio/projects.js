import ProjectXY from "../../images/projectXY.webp";
import Quire from "../../images/quire.webp";
import DavidBerg from "../../images/davidAnders.webp";
import KYH from "../../images/kyh.webp";
import Grex from "../../images/grex.webp";
import David from "../../images/davida.webp";
import Proud from "../../images/prouda.webp";
import QuizRR from "../../images/newProjects/QuizRR.JPG";
import cats from "../../images/newProjects/cats.JPG";
import pterik from "../../images/newProjects/pt-erik.JPG";
import vetfamily from "../../images/newProjects/vetfamily.JPG";
import willandskill from "../../images/newProjects/willandskill.JPG";


//Thumbnail photos
import ProjectXYSmall from "../../images/projectXYSmall.webp";
import QuireSmall from "../../images/quireSmall.webp";
import DavidBergSmall from "../../images/davidAndersSmall.webp";
import KYHSmall from "../../images/kyhSmall.webp";
import GrexSmall from "../../images/grexSmall.webp";
import DavidSmall from "../../images/davidaSmall.webp";
import ProudSmall from "../../images/proudaSmall.webp";
import QuizRRSmall from "../../images/newProjects/QuizRRsmall.jpg";
import catsSmall from "../../images/newProjects/catssmall.jpg";
import pterikSmall from "../../images/newProjects/pt-eriksmall.jpg";
import vetfamilySmall from "../../images/newProjects/vetfamilysmall.jpg";
import willandskillSmall from "../../images/newProjects/willandskillsmall.jpg";

const projects = [
  {
    id: 0,
    original: pterik,
    thumbnail: pterikSmall,
    originalAlt: "PT-erik dashboard",
    thumbnailTitle: "PT-erik dashboard",
    thumbnailAlt: "PT-erik dashboard",
    github: "https://github.com/b3rg3t/donpdong",
    status: "done",
    website: "https://pt-erik.now.sh/",
    text:
      "This is a website for a personal trainer providing online-traing and more. The site is built with React NextJS, it is a AMP(accelerated mobile pages) hybrid page that has Dato CMS connected to it. It is built with typescript, serverside rendering and more. ",
  },
  {
    id: 1,
    original: vetfamily,
    thumbnail: vetfamilySmall,
    originalAlt: "Vet clinics page",
    thumbnailTitle: "Vet clinics page",
    thumbnailAlt: "Vet clinics page",
    // github: "https://github.com/b3rg3t/donpdong",
    status: "done",
    // website: "https://pt-erik.now.sh/",
    text:
      "This is a dashboard for vet clinics. Been working on the part for search for clinics/files, upload/download files, see clinics on a map and much more. Built on React NextJS, typescrips, bootstrap, Sass and more. It uses django/python as back-end.",
  },
  {
    id: 2,
    original: willandskill,
    thumbnail: willandskillSmall,
    originalAlt: "Digital agency page",
    thumbnailTitle: "Digital agency page",
    thumbnailAlt: "Digital agency page",
    // github: "https://github.com/b3rg3t/donpdong",
    status: "done",
    website: "https://www.willandskill.se/sv/",
    text:
      "This a website for a digital agency I have been doing internship for. I have made the site to a AMP-hybrid page using React NextJS, typescript and more.",
  },
  {
    id: 3,
    original: cats,
    thumbnail: catsSmall,
    originalAlt: "Cats dashboard",
    thumbnailTitle: "Cats dashboard",
    thumbnailAlt: "Cats dashboard",
    github: "https://github.com/b3rg3t/semantic_hmtl_nextjs",
    status: "done",
    text:
      "This is a website where you can create a user, remove/update user, create polls that people can answer to and displays a chart of what people have been voting on. It is built with React NextJS, Sass. It uses my own back-end that I have built in django/python.",
  },
  {
    id: 4,
    original: QuizRR,
    thumbnail: QuizRRSmall,
    originalAlt: "Quiz app dashboard",
    thumbnailTitle: "Quiz app dashboard",
    thumbnailAlt: "Quiz app dashboard",
    status: "done",
    text:
      "This is a dahsboard for clients that has signed up with quiz company. It is built with styled-components, mongoDB as back-end, React, proptypes and more.",
  },
  {
    id: 5,
    original: Proud,
    thumbnail: ProudSmall,
    originalAlt: "Proud",
    thumbnailTitle: "Proud",
    thumbnailAlt: "Proud",
    status: "done",
    github: "https://github.com/b3rg3t/vendre_proud",
    text:
      "Proud is a webb application to Slack that collects messages from your slack workspace channel where you want to praise a co-worker. You can send messages from Proud into a specific channel on Slack. Join different groups and add co-workers to groups. It is created in VUE and uses VUEX for global state. It has Firebase as back-end."
  },
  {
    id: 6,
    original: ProjectXY,
    thumbnail: ProjectXYSmall,
    originalAlt: "Project XY",
    thumbnailTitle: "Project XY",
    thumbnailAlt: "Project XY",
    status: "build",
    text:
      "This a website for a swedish rockband that needs a new improved and responsive website that works properly on mobile phones and tablets aswell in desktop. The project is under construction.",
  },
  {
    id: 7,
    original: Quire,
    thumbnail: QuireSmall,
    originalAlt: "Quire notepad",
    originalTitle: "Quire notepad",
    thumbnailAlt: "Quire",
    github: "https://github.com/b3rg3t/leo_quire",
    status: "done",
    text:
      "Quire notepad was our first group project where we was introduced to the Agile workform Scrum. The project is made in vanilla js and works with local storage. You can create/edit/star-mark/search for notes."
  },
  {
    id: 8,
    original: DavidBerg,
    thumbnail: DavidBergSmall,
    originalAlt: "David Anders Berg",
    originalTitle: "David Anders Berg",
    thumbnailAlt: "David Anders Berg",
    github: "https://github.com/b3rg3t/Portfolio",
    status: "done",
    text:
      "This is my first bigger project I made in school and it is a porfolio website. It is written in HTML, CSS and JavaScript. I did put a lot effort trying to make it responsive. It is a single page site."
  },
  {
    id: 9,
    original: KYH,
    thumbnail: KYHSmall,
    originalAlt: "KYH",
    originalTitle: "KYH",
    thumbnailAlt: "KYH",
    status: "done",
    text: "KYH was our first task in school to make a landing page. It is made with simpel HTML,CSS and JavaScript"
  },
  {
    id: 10,
    original: Grex,
    thumbnail: GrexSmall,
    originalAlt: "Grex",
    thumbnailTitle: "Grex",
    thumbnailAlt: "Grex",
    github: "https://github.com/glindberg/grex_candy",
    status: "done",
    text:
      "Grex was our first group project created with React. Grex is supposed to be a training app to find like minded people that want to find training partners. It uses Firebase as back-end and you can log in, create a profile, create activities and live chat with other people. It also have leaflet map where you can see your position in realtime"
  },
  {
    id: 11,
    original: David,
    thumbnail: DavidSmall,
    originalAlt: "David Berg",
    thumbnailTitle: "David Berg",
    thumbnailAlt: "David Berg",
    github: "https://github.com/b3rg3t/grex_candy",
    status: "done",
    // website: "http://davidanders.se/#/",
    text:
      "This was my very first project in react. It was a portfolio website and it was a fun way to get introduced with react. I was not happy with the design so thats why i created the site you are on now."
  },
];

export { projects };
