import React from "react";

import "./CarreiraSlide.scss";

function CarreiraSlide1() {
  return (
    <div className="Carreira-Slide-inner">
      <div className="Carreira-SubTitulo">
        <h1>Área Profissional</h1>
        <h5>Atualmente</h5>
      </div>

      <ul className="Carreira-Slide">
        <li className="Carreira-Slide-Item">
          <div>
            <h3>Em busca de desafios profissionais</h3>
            <p>
              Tenho vontade de ingressar na área de T.I, mas ainda não tive a
              oportunidade de atuar profissionalmente.
            </p>
          </div>
          <span>
            <h5>2023</h5>
            <h6>Atualmente</h6>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CarreiraSlide1;