import ProjectXY from "../../images/projectXY.jpg";
import Quire from "../../images/Quire.png";
import DavidBerg from "../../images/AndersBerg.png";
// import { myRenderItem } from "./index"

const projects = [
  {
    id: 0,
    original: ProjectXY,
    thumbnail: ProjectXY,
    originalAlt: "Grex",
    description: "Project XY is a rockband in Sweden",
    sizes: "height: 300px, width: 300px",
    github: "https://github.com/b3rg3t/grex_candy"
  },
  {
    id: 1,
    original: ProjectXY,
    thumbnail: ProjectXY,
    originalAlt: "Project XY",
    description: "This is a website",
    thumbnailLabel: "Project XY",
    thumbnailTitle: "Project XY",
  },
  {
    id: 2,
    original: Quire,
    thumbnail: Quire,
    originalAlt: "Quire notepad",
    thumbnailLabel: "Quire",
    description: "This is a website",
    github: "https://github.com/b3rg3t/leo_quire"
  },
  {
    id: 3,
    original: DavidBerg,
    thumbnail: DavidBerg,
    originalAlt: "David Anders",
    thumbnailLabel: "David Berg",
    originalTitle: "David Anders",
    description: "This is a website",
    github: "https://github.com/b3rg3t/leo_quire"
  }
];

// https://github.com/b3rg3t/leo_quire

export { projects };
