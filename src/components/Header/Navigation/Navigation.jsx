import React from "react";

import { Logo } from "../../../assets/SvgImages/Logo.jsx";
import "./Navigation.scss";

export const scrollToSection = (refClass) => {

  const element = document.getElementById(`${refClass}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error(`Element with class ${refClass} not found.`);
  }
}

const Navigation = () => {
  return (
    <nav className="navigation">
      <Logo />
      <ul>
        <li onClick={() => scrollToSection("home")}>Inicio</li>
        <li onClick={() => scrollToSection("aboutMe")}>Sobre mim</li>
        <li onClick={() => scrollToSection("portfolio")}>Portfólio</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("carreira")}>Carreira</li>
        <li onClick={() => scrollToSection("contato")}>Contato</li>
      </ul>
    </nav>
  );
}

export default Navigation;
