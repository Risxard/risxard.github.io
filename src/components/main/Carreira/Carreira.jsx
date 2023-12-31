import React, {useState} from "react";

import "./Carreira.scss";

import CarreiraSlide1 from "./CarreiraSlide/CarreiraSlide1.jsx";
import CarreiraSlide2 from "./CarreiraSlide/CarreiraSlide2.jsx";
import CarreiraSlide3 from "./CarreiraSlide/CarreiraSlide3.jsx";




function Carreira() {



  return (
    <section id="Carreira" className="Carreira">
      <div className="Carreira-Inner">
        <div className="Title-Component">
          <span>
            <p>💼 Carreira</p>
          </span>
          <h1>Trajetória até aqui</h1>
        </div>
      </div>

      <div className="Carreira-Inner">
        <div className="Carreira-SubTitulo">
          <h1>Área Profissional</h1>
          <h5>Atualmente</h5>
        </div>
      </div>
      <CarreiraSlide1 />


      <div className="Carreira-Inner">
        <div className="Carreira-SubTitulo">
          <h1>Área Acadêmica</h1>
          <h5>2016 · Atualmente</h5>
        </div>
      </div>
      <CarreiraSlide2 />


      <div className="Carreira-Inner">
        <div className="Carreira-SubTitulo">
          <h1>Cursos Complementares</h1>
          <h5>Atualmente</h5>
        </div>
      </div>
      <CarreiraSlide3 />





      <div className="Carreira-inner-Container">
        <CarreiraSlide1 />
        <CarreiraSlide2 />
      </div>


      <div className="Carreira-inner-Container">
        <CarreiraSlide3 />
      </div>




    </section>
  );
}

export default Carreira;