import React from "react";

import "./SkiilsSlide.scss";

import ReactLogo from "./TechLogos/React.svg";
import JavascriptLogo from "./TechLogos/Javascript.svg";
import CSS from "./TechLogos/css.svg";
import Html from "./TechLogos/HTML5.svg";
import Git from "./TechLogos/Git.svg";
import Github from "./TechLogos/Github.svg";
import Figma from "./TechLogos/Figma.svg";
import Python from "./TechLogos/Python.svg";
import Nodejs from "./TechLogos/Nodejs.svg";
import Sass from "./TechLogos/Shape.svg";


function SkillsSlide() {
  return (
    <div className="SkillsSlide-Container">
      <h5>Techs que uso no dia a dia</h5>
      <div className="Skill-Slide-inner">
        <div className="Skills-Slide">
          <span><img src={JavascriptLogo} alt="Javascript Icon" /> <h3>JAVASCRIPT</h3></span>
          <span><img src={ReactLogo} alt="React.js Icon" /><h3>REACT</h3></span>
          <span><img src={Html} alt="html Icon" /><h3>HTML</h3></span>
          <span><img src={CSS} alt="CSS Icon" /><h3>CSS</h3></span>
          <span><img src={Git} alt="Git Icon" /><h3>GIT</h3></span>
          <span><img src={Github} alt="Github Icon" /><h3>GITHUB</h3></span>
          <span><img src={Figma} alt="Figma Icon" /><h3>FIGMA</h3></span>
        </div>
      </div>

      <h5>Outras techs com que já realizei projetos</h5>
      <div className="Skill-Slide-inner">
        <div className="Skills-Slide">
        <span><img src={ReactLogo} alt="React.js Icon" /><h3>REACT NATIVE</h3></span>
        <span><img src={Sass} alt="html Icon" /><h3>SASS</h3></span>
        <span><img src={Python} alt="Javascript Icon" /><h3>PYTHON</h3></span>
        <span><img src={Nodejs} alt="React.js Icon" /><h3>NODE.JS</h3></span>

        </div>
      </div>
    </div>
  );
}
export default SkillsSlide;
