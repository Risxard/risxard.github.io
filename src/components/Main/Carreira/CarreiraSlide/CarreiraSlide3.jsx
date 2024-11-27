import React,{ useState } from "react";

import "./CarreiraSlide.scss";

const CarreiraSlide3 = () => {

  const [SelectedCard, setSelectedCard] = useState(null);

  const selectCard = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="Carreira-Slide-inner">
      <div className="Carreira-SubTitulo">
        <h1>Cursos Complementares</h1>
        <h5>Atualmente</h5>
      </div>

      <ul className="Carreira-Slide">
      <li onClick={() => selectCard('card1')}  className={`Carreira-Slide-Item ${SelectedCard === 'card1' ? 'SelectedCard' : ''}`}>
          <div>
            <h3>Computação em Nuvem | AWS Discovery Day (Estácio)</h3>
            <p>
              Este curso explora as vantagens da computação em Nuvem da AWS. O
              conteúdo abrange os serviços da AWS que estão ligados à
              computação, armazenamento, gestão de bases de dados, redes e
              conteúdo.
            </p>
          </div>
          <span>
            <h5>4 horas</h5>
            <h6>Maio/2023</h6>
          </span>
        </li>

        <li onClick={() => selectCard('card2')}  className={`Carreira-Slide-Item ${SelectedCard === 'card2' ? 'SelectedCard' : ''}`}>
          <div>
            <h3>React & Redux</h3>
            <p>
              Curso da Udemy, ministrado pela Cod3r Cursos Online, cujo os
              principais objetivo são desenvolver aplicações full-stack em React e
              javascript, configurar aplicações com Webpack em React/Redux, além
              de familiarizar-se com os principais fundamentos e conceitos do
              Next.js.
            </p>
          </div>
          <span>
            <h5></h5>
            <h6>2022</h6>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CarreiraSlide3;
