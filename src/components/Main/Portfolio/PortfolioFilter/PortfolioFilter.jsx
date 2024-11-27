import React,{ useState } from 'react';


import './PortfolioFilter.scss'

import ReactLogo from "../TechLogos/React.svg";
import All from "../TechLogos/FiltersBtns/DesignIcon.svg";




const PortfolioFilter = () => {
  
  const [selecionado, setSelecionado] = useState('botao3');

  function onlineFilter(){
    const slides = document.querySelectorAll('.PortfolioSlider-inner li');

    for (let slide of slides){


      if (!slide.classList.contains('Online')){
        slide.style.display = "none";
        setSelecionado('botao1');

      } else {
        slide.style.display = "flex";

      }
  
    }
  }

  function reactFilter(){
    const slides = document.querySelectorAll('.PortfolioSlider-inner li');

    
    for (let slide of slides){
  
      if (!slide.classList.contains('React')){
        setSelecionado('botao2');
        slide.style.display = "none";


      } else {
        slide.style.display = "flex";

      }
    }


  }

  function allFilter(){
    const slides = document.querySelectorAll('.PortfolioSlider-inner li');

    for (let slide of slides){
      slide.style.display = "flex";
      setSelecionado('botao3');

    }
  }






  return (
      <ul className="Portfolio-Filtros-Container">
        <li  id='OnlineBtn' onClick={onlineFilter} className={selecionado === 'botao1' ? 'selecionado' : ''} >
          <img src={All} alt="button filter " />
          Online
        </li>

        <li id='ReactBtn' onClick={reactFilter} className={ selecionado === 'botao2' ? 'selecionado' : ''} >
          <img   src={ReactLogo} alt="button filter" />
          React
        </li>

        <li id='AllBtn' onClick={allFilter}  className={selecionado === 'botao3' ? 'selecionado' : ''}>
          <img  src={All} alt="button filter" />
          Todos
        </li>

      </ul>
  );
}

export default PortfolioFilter;
