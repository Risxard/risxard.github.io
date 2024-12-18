import React from "react";

import './WhatsAppLink.scss'

import WppLogo from './WhatsappLogo.svg';

const WhatsAppLink = () => {
  return (
    <a className="WhatsAppLink-Container" href="https://www.linkedin.com/in/richardsonsouza/" target="_blank">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9999 0C24.837 0 32 7.164 32 16.0001C32 24.8361 24.837 32 15.9999 32C7.1629 32 0 24.836 0 16.0001C0 7.16411 7.16301 0 15.9999 0Z" fill="#7B4AE2" fillOpacity="0.5"/>
          <path d="M9.01599 21.984H12.012V11.998H9.01599V21.984ZM20.688 11.6521C19.234 11.6521 17.933 12.183 17.0101 13.3551V11.9651H14.0031V21.9841H17.0101V16.5661C17.0101 15.4211 18.0591 14.304 19.3731 14.304C20.687 14.304 21.0111 15.4211 21.0111 16.5381V21.9831H24.0071V16.3151C24.007 12.378 22.143 11.6521 20.688 11.6521ZM10.5 11C11.328 11 12 10.328 12 9.49997C12 8.67195 11.328 8.00003 10.5 8.00003C9.67199 8.00003 8.99995 8.67206 8.99995 9.50008C8.99995 10.3281 9.67199 11 10.5 11Z" fill="#090E16"/>
          </svg>
        <h5>Vamos conversar</h5>
    </a>

  );
}

export default WhatsAppLink;
