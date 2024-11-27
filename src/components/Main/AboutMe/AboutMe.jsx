import React from "react";

import "./AboutMe.scss";

import FotoPortfolio from "./AboutAvatar.jpeg";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="AboutMe">
      <div className="AboutMe-Inner">
        <div className="AboutMe-Foto-Container">
          <img src={FotoPortfolio} alt="Foto do Richardson" />
        </div>

        <div className="AboutMe-Text">
          <div className="Title-Component">
            <span>
              <p>🧐 Sobre mim</p>
            </span>
            <h1>
              Richardson
              <br />
              Souza
            </h1>
          </div>
          <p>
            Mas pode me chamar apenas de Richard. Prazer! Com um ano de
            experiência estudando e construindo aplicações front-end utilizando
            Javascript e React.js, sou graduado em Análise e Desenvolvimento de
            Sistemas pela Estácio de Sá. Meu maior prazer é resolver problemas e
            dar vida a projetos criativos.
            <br />
            <br />
            🚀 Um dia de cada vez, um passo de cada vez, sempre em busca de
            progresso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
