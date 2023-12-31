import React from "react";
import "./PortfolioSlider.scss";

function PortfolioSlider() {
  const portfolio = [
    {
      id: "SisTEA",
      link: "https://github.com/Risxard/SisTEA",
      repoLink: "https://github.com/Risxard/SisTEA",
      titulo: "SisTEA",
      descricao:
        "Participei no desenvolvimento do MVP para o app SisTEA. Um aplicativo dedicado a melhorar a comunicação de crianças autistas não verbais",
      imagem:
        "https://github.com/Risxard/SisTEA/assets/88140056/a0ecb0ff-779b-4ea6-8093-9354efcc4017",
      techs: ["React Native", "Axios"],
    },
    {
      id: "SuprimeVideo",
      link: "https://richardsonsouza.com/suprime-video",
      repoLink: "https://richardsonsouza.com/suprime-video",
      titulo: "Suprime video",
      descricao:
        "Catálogo de filmes com integração de API, incluindo uma tela de login, perfis de usuário e categorização de filmes e séries",
      imagem:
        "https://github.com/Risxard/suprime-video/assets/88140056/7a7c66c8-09d4-4e16-a32d-b03014844daf",
      status: "In Progress",
      techs: ["React", "Redux", "Axios"],
    },
    {
      id: "MeuPortfolio",
      link: "/",
      repoLink: "https://github.com/Risxard/risxard.github.io",
      titulo: "Meu Portfolio",
      descricao:
        "Este é o meu portfólio atual, originalmente desenvolvido apenas com HTML, CSS e JavaScript, e posteriormente refatorado para React.",
      imagem:
        "https://github.com/Risxard/risxard.github.io/assets/88140056/bff4de47-9dea-464c-a523-1c1ac4d53f8d",
      status: "Online",
      techs: ["React", "Sass"],
    },
    {
      id: "Gymme",
      link: "https://github.com/Risxard/Gymme/",
      repoLink: "https://github.com/Risxard/Gymme/",
      titulo: "Gymme",
      descricao:
        "Landing page para uma academia, com um design contemporâneo, priorizando Mobile First e sendo totalmente responsiva",
      imagem: "https://i.imgur.com/xeVZW2A.png",
      status: "Online",
      techs: ["Javascript", "jQuery"],
    },
  ];

  return (
    <div className="PortfolioSlider">
      <ul id="PortSlider-Inner" className="PortfolioSlider-inner">
        {portfolio.map((project) => (
          <li
            key={project.id}
            className={`PortfolioSlider-Item ${
              project.status
            } ${project.techs.join(" ")}`}
          >
            <a href={project.link} target="_blank">
              <div className="SlideItem-titulo">
                <div className="links-container">
                  <div>
                    <h4>{project.titulo}</h4>
                  </div>
                </div>
                <p>{project.descricao}</p>
              </div>
              <div className="PortFolio-Classes">
                {project.status ? (
                  <span className={project.status}>
                    {project.status === "Progress" ? (
                      <h6>In Progress</h6>
                    ) : (
                      <h6>{project.status}</h6>
                    )}
                  </span>
                ) : (
                  ""
                )}

                {project.techs.map((tech) => (
                  <span className={tech} key={tech}>
                    <h6>{tech === "React" ? "React.js" : tech}</h6>
                  </span>
                ))}
              </div>

              <div className="portfolio-classes-container">
                <img src={project.imagem} alt={project.titulo} />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioSlider;
