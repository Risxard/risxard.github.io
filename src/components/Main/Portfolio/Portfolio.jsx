import React, { useEffect, useState } from "react";

import "./Portfolio.scss";
import PortfolioFilter from "./PortfolioFilter/PortfolioFilter";
import PortfolioSlider from "./PortfolioSlider/PortfolioSlider";
import { getAllProjects } from "../../../lib/dato-cms";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  const getStaticProps = async () => {
    const data = await getAllProjects();
    setProjects(data.allPortfolioProjects);
  };

  useEffect(() => {
    getStaticProps();
  }, []);

  return (
    <section id="portfolio" className="Portfolio">
      <div className="Portfolio-Inner">
        <div className="Portfolio-Header-Container">
          <div className="Title-Component">
            <span>
              <p>🔗 Portfólio</p>
            </span>
            <h1>Trabalhos e projetos</h1>
          </div>
          <PortfolioFilter />
        </div>
      </div>

      <PortfolioFilter />

      

      {projects && <PortfolioSlider projects={projects} />}
    </section>
  );
};
export default Portfolio;
