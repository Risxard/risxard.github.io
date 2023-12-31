import React from "react";

import "./Skills.scss";

import SkillsSlide from "./SkillsSlide/SkiilsSlide.jsx";


function Skills() {
  return (
    <section id="Skills" className="Skills">
      <div className="Skills-Inner">
        <div className="Title-Component">
          <span>
            <p>👨🏾‍💻 Skills</p>
          </span>
          <h1>Tecnologias e habilidades</h1>
        </div>
      </div>
      
      <SkillsSlide/>

    </section>
  );
}
export default Skills;
