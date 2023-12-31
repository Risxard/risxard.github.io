import React, {useEffect} from "react";
import "./App.scss";

import SocialMedia from "./components/SocialMedias/SocialMedia.jsx";
import WhatsAppLink from "./components/WhatsAppLink/WhatsAppLink.jsx";

import Navigation from "./components/header/Navigation/Navigation.jsx";
import HeaderConteudo from "./components/header/HeaderConteudo/HeaderConteudo.jsx";
import AboutMe from "./components/main/AboutMe/AboutMe.jsx";
import IntroMain from "./components/main/IntroMain/IntroMain.jsx";
import Carreira from "./components/main/Carreira/Carreira.jsx";
import Skills from "./components/main/Skills/Skills";
import Portfolio from "./components/main/Portfolio/Portfolio";

import CopyLogo from "./assets/Logos/CopySimple.svg";
import SendLogo from "./assets/Logos/PaperPlaneTilt.svg";
import BackToLogo from "./assets/Logos/ArrowUp.svg";

function App() {

  useEffect(() => {
    function ocultar(){
      const btnTop = document.getElementById('btnTop');
  
      if (window.scrollY > 100){
  
        btnTop.style.display = "flex"
  
      } else {
        btnTop.style.display = "none"
      }
    }

    document.addEventListener('scroll', ocultar)

  }, []);

    
  function copyEmail(){
    const email = document.getElementById('Email').innerText;

    navigator.clipboard.writeText(email)

    document.getElementById("copySuccess").style.display = "flex";
    setTimeout( function() {
      document.getElementById("copySuccess").style.display = "none";
  }, 1000)

  }

  function ScrollTopTop (){
    window.scrollTo(0,0)
  }



  return (
    <>
      <header id="BackToTop">
        <div className="header-inner">
          <div className="SocialTop">
            <SocialMedia />
          </div>

          <Navigation />
          <HeaderConteudo />
        </div>
      </header>

      <main>
        <IntroMain />
        <AboutMe />
        <Portfolio/>
        <Skills/>
        <Carreira />
        
      </main>

      <footer>
        <section className="Footer-Contatos">
          <div className="Foot-Contatos-inner">
            <div className="Title-Component">
              <span>
                <p>📬 Contatos</p>
              </span>
              <h1>Vamos conversar!</h1>
            </div>

            <div className="Footer-Email-Container">
              <WhatsAppLink />

              <div className="Email-Container">
                <a href="mailto:richardsonphp@gmail.com"><img id="sendbtn" src={SendLogo} alt="Send Logo" /></a>
                <h4>E-mail:</h4>
                <span className="Email-Container-Content">
                  <h5 id="Email">richardsonphp@gmail.com</h5>
                  <span className="copy-container">
                    <img id="copybtn" src={CopyLogo} onClick={copyEmail} onTouchEnd={copyEmail}  alt="Copy Logo" />
                    <span id="copySuccess">Copiado!</span>
                  </span>
                </span>
              </div>
            </div>
            <a href="#BackToTop">
              Voltar ao topo
              <img src={BackToLogo} alt="Back To Top" />
            </a>
          </div>
        </section>

        <section id="Contato" className="footer-direitos-container">
          <div className="footer-direitos-inner">
            <h5>Copyright © Henrique Sousa · 2022</h5>
            <SocialMedia />
          </div>
        </section>
      </footer>
      <span id="btnTop" onClick={ScrollTopTop}>
          <i className="arrow up"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" rx="16" transform="matrix(0 -1 -1 0 60 60.0005)" fill="#7B4AE2" fillOpacity="0.1"/>
            <path d="M40 34.0005L30 24.0005L20 34.0005" stroke="#7B4AE2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </i>
      </span>
    </>
  );
}

export default App;
