import React, { useState } from "react";
import "./skills.scss";
import { SkillsItem } from "./skills";

const Skills = () => {
  const [logos] = useState(SkillsItem);

  return (
    <article className="skills">
      <div className="skills__container">
        <ul className="skills__ul">
          {logos.map((skill, index) => (
            <li className="skills__li" key={skill.pic}>
              <img
                onMouseOver={e => (e.currentTarget.src = skill.hoverPic)}
                onMouseLeave={e => (e.currentTarget.src = skill.pic)}
                className="skills__li__pic"
                src={skill.pic}
                alt={skill.alt}
                title={skill.title}
                width="50px"
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Skills;
