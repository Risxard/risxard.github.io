import React from "react";

import "./CarreiraSlide.scss";

const CarreiraSlide2 = () => {
  return (
    <div className="Carreira-Slide-inner">
      <div className="Carreira-SubTitulo">
        <h1>Área Acadêmica</h1>
        <h5>2016 · Atualmente</h5>
      </div>

      <ul className="Carreira-Slide">
        <li className="Carreira-Slide-Item">
          <div>
            <h3>Superior: Análise e Desenvolvimento de Sistemas</h3>
            <p>
              Recém graduado pela Universidade Estácio de Sá no curso de Análise
              e Desenvolvimento de Sistemas.
            </p>
          </div>
          <span>
            <h5>2 anos e 7 meses</h5>
            <h6>Janeiro/2021 · Julho/2023</h6>
          </span>
        </li>

        <li className="Carreira-Slide-Item">
          <div>
            <h3>Ensino médio completo</h3>
            <p>
              Ao final de 2016, me formei no ensino médio na Escola Antônio Luiz
              Valiati, na Serra, Espírito Santo.
            </p>
          </div>
          <span>
            <h5></h5>
            <h6>2016</h6>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CarreiraSlide2;