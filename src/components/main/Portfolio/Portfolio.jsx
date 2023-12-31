import React from "react";

import "./Portfolio.scss";
import PortfolioFilter from "./PortfolioFilter/PortfolioFilter";
import PortfolioSlider from "./PortfolioSlider/PortfolioSlider";

function Portfolio() {
  return (
    <section id="Portfolio" className="Portfolio">
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
      <PortfolioSlider />
    </section>
  );
}
export default Portfolio;
