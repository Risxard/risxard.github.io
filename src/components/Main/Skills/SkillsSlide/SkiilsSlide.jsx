import React, { useEffect, useState } from "react";

import "./SkiilsSlide.scss";

import ReactLogo from "./TechLogos/React.svg";
import JavascriptLogo from "./TechLogos/Javascript.svg";
import CSS from "./TechLogos/Css.svg";
import Html from "./TechLogos/HTML5.svg";
import Git from "./TechLogos/Git.svg";
import Github from "./TechLogos/Github.svg";
import Figma from "./TechLogos/Figma.svg";
import Python from "./TechLogos/Python.svg";
import Nodejs from "./TechLogos/Nodejs.svg";
import Sass from "./TechLogos/Shape.svg";

const SkillsSlide = (props) => {
  const [techs, setTechs] = useState([])
  const [usedTechs, setUsedTechs] = useState([])

  useEffect(() =>{

    if(props.techs.techs != undefined && props.techs.usedTechs != undefined){
      setUsedTechs(props.techs.usedTechs)
      setTechs(props.techs.techs)
    }

  },[props])

  return (
    <div className="SkillsSlide-Container">
      <h5>Techs que uso no dia a dia</h5>
      <div className="Skill-Slide-inner">
        <div className="Skills-Slide">
          {techs.map((tech,index) =>{
            return(
              <span key={index}><img src={tech.techImage.url} alt="Javascript Icon" /> <h3>{tech.techName.toUpperCase()}</h3></span>
            )
          })} 
        </div>
      </div>

      <h5>Outras techs com que já realizei projetos</h5>
      <div className="Skill-Slide-inner">
        <div className="Skills-Slide">
        {usedTechs.map((tech,index) =>{
            return(
              <span key={index}><img src={tech.techImage.url} alt="Javascript Icon" /> <h3>{tech.techName.toUpperCase()}</h3></span>
            )
          })} 
        </div>
      </div>
    </div>
  );
}
export default SkillsSlide;
