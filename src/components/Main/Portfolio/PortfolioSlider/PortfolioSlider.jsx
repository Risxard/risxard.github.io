import React, { useEffect, useState, useRef } from "react";
import "./PortfolioSlider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const PortfolioSlider = ({projects}) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  const handleOutsideClick = (event) => {
    if (sliderRef.current && !sliderRef.current.contains(event.target)) {
      setSelectedCardIndex(null);
    }
  };

  return (
    <div className="PortfolioSlider" ref={sliderRef}>
      <ul id="PortSlider-Inner" className="PortfolioSlider-inner">
        {projects.map((project, index) => (
          <li
            key={index}
            className={`PortfolioSlider-Item ${
              index === selectedCardIndex ? "active" : ""
            } ${project.projectStatus} ${project.tags
              .split(", ")
              .map((tech) => tech)
              .join(" ")}`}
            onClick={() => handleCardClick(index)}
          >
            <div>
              <div className="SlideItem-titulo">
                <div className="links-container">
                  <div>
                    <h4>{project.projectTitle}</h4>
                  </div>
                </div>
                <p>{project.projectDescription}</p>
              </div>
              <div className="PortFolio-Classes">
                {project.projectStatus ? (
                  <span className={project.projectStatus}>
                    {project.projectStatus === "Progress" ? (
                      <h6>In Progress</h6>
                    ) : (
                      <h6>{project.projectStatus}</h6>
                    )}
                  </span>
                ) : (
                  ""
                )}

                {project.tags.split(", ").map((tech) => (
                  <span className={tech} key={tech}>
                    <h6>{tech === "React" ? "React.js" : tech}</h6>
                  </span>
                ))}
              </div>

              <div className="portfolio-classes-container">
                <img src={project.projectImage.url} alt={project.titulo} />
              </div>

              <span className="project-links-container">
                {project.projectUrl ? (
                  <a href={`${project.projectUrl}`} target="_blank">
                    Visualizar projeto{" "}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{" "}
                  </a>
                ) : (
                  ""
                )}
                {project.projectVideo ? (
                  <a href={`${project.projectVideo.url}`} target="_blank">
                    Video do projeto{" "}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{" "}
                  </a>
                ) : (
                  ""
                )}

                {project.repositoryUrl ? (
                  <a href={`${project.repositoryUrl}`} target="_blank">
                    Repositório no Github
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                ) : (
                  ""
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioSlider;
