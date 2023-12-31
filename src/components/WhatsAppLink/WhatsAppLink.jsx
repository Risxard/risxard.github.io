import React from "react";

import './WhatsAppLink.scss'

import WppLogo from './WhatsappLogo.svg';

function WhatsAppLink() {
  return (
    <a className="WhatsAppLink-Container" href="https://bit.ly/3ZmWXVP" target="_blank">
        <img src={WppLogo} alt="Ícone SVG" />
        <h5>Vamos conversar</h5>
    </a>

  );
}

export default WhatsAppLink;
