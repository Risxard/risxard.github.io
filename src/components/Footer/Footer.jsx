import { useEffect } from "react";
import WhatsAppLink from "../WhatsAppLink/WhatsAppLink";
import SocialMedia from "../SocialMedias/SocialMedia";

import ArrowUp from '../../assets/Logos/ArrowUp.svg';
import CopyLogo from '../../assets/Logos/CopySimple.svg';
import Paper from '../../assets/Logos/PaperPlaneTilt.svg';
import scrollTo from "../../utils/scrollTo";


const Footer = () => {

  useEffect(() => {
    function ocultar() {
      const btnTop = document.getElementById("btnTop");

      if (window.scrollY > 100) {
        btnTop.style.display = "flex";
      } else {
        btnTop.style.display = "none";
      }
    }

    document.addEventListener("scroll", ocultar);
  }, []);

  function copyEmail() {
    const email = document.getElementById("Email").innerText;

    navigator.clipboard.writeText(email);

    document.getElementById("copySuccess").style.display = "flex";
    setTimeout(function () {
      document.getElementById("copySuccess").style.display = "none";
    }, 1000);
  }

  return (
    <footer>
      <div className="Footer-Contatos">
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
              <a href="mailto:richardsonphp@gmail.com">
                <img id="sendbtn" src={Paper} alt="Send Logo" />
              </a>
              <h4>E-mail:</h4>
              <span className="Email-Container-Content">
                <h5 id="Email">richardsonphp@gmail.com</h5>
                <span className="copy-container">
                  <img
                    id="copybtn"
                    src={CopyLogo}
                    onClick={copyEmail}
                    onTouchEnd={copyEmail}
                    alt="Copy Logo"
                  />
                  <span id="copySuccess">Copiado!</span>
                </span>
              </span>
            </div>
          </div>
          <a onClick={scrollTo} className="scroll-to-top">
            Voltar ao topo
            <img src={ArrowUp} alt="Back To Top" />
          </a>
        </div>
      </div>

      <div id="contato" className="footer-direitos-container">
        <div className="footer-direitos-inner">
          <h5>Copyright © Richardson Souza · 2022</h5>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
