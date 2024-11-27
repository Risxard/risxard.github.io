import React from "react";

import CodeIcon from "./IntroIcons/CodeIcon.svg";
import DesignIcon from "./IntroIcons/DesignIcon.svg";
import ProjectsIcon from "./IntroIcons/ProjectsIcon.svg";

import "./IntroMain.scss";

const IntroMain = () => {
  return (
    <section className="IntroMain">
      <div className="IntroMain-Inner">
        <div className="Intro-Container">
          <ul className="Intro-Lista1 Lista">
            <li className="Lista1-Item1">
              <img src={ProjectsIcon} alt="Design Icon" />
              <h5>Explorando a</h5>
              <h1>Programação</h1>
            </li>
            <li className="Lista1-Item2">
              <img src={CodeIcon} alt="Code Icon" />
              <h5>Programando com</h5>
              <h1>Typescript</h1>
            </li>
            <li className="Lista1-Item3">
              <img src={DesignIcon} alt="Projects Icon" />
              <h5>Gestão de Versões com</h5>
              <h1>Git</h1>
            </li>
          </ul>

          <ul className="Intro-Lista2 Lista">
            <li className="Lista2-Item1">
              <h5>Desenvolvendo projetos </h5>
              <h1>Criativos</h1>
            </li>
            <li className="Lista2-Item2">
              <h5>Em aplicações</h5>
              <h1>Front-end</h1>
            </li>
            <li className="Lista2-Item3">
              <h5>Compartilhando no</h5>
              <h1>GitHub</h1>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default IntroMain;
