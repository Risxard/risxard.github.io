import React from "react";

import "./CarreiraSlide.scss";

const CarreiraSlide1 = () => {
  return (
    <div className="Carreira-Slide-inner">
      <div className="Carreira-SubTitulo">
        <h1>Área Profissional</h1>
        <h5>Atualmente</h5>
      </div>

      <ul className="Carreira-Slide">
        <li className="Carreira-Slide-Item">
          <div>
            <h3>Freelancer</h3>
            <p>
              Como freelancer, estou desenvolvendo aplicações, desafiando-me
              constantemente e expandindo minhas habilidades para alcançar novos
              patamares na minha jornada profissional.
            </p>
          </div>
          <span>
            <h5>2024</h5>
            <h6>Atualmente</h6>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CarreiraSlide1;
