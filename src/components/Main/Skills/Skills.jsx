import React, { useEffect, useState } from "react";

import "./Skills.scss";

import SkillsSlide from "./SkillsSlide/SkiilsSlide.jsx";
import { getAllProjects } from "../../../lib/dato-cms.js";

const Skills = (props) => {
  const [allSkills, setAllSkills] = useState([]);

  const getStaticProps = async () => {
    const data = await getAllProjects();
    setAllSkills({ techs: data.allSkills, usedTechs: data.allUsedSkills });
  };

  useEffect(() => {
    getStaticProps();
  }, []);



  return (
    <section id="skills" className="Skills">
      <div className="Skills-Inner">
        <div className="Title-Component">
          <span>
            <p>👨🏾‍💻 Skills</p>
          </span>
          <h1>Tecnologias e habilidades</h1>
        </div>
      </div>

      

      {allSkills && <SkillsSlide techs={allSkills} />}
    </section>
  );
};
export default Skills;
