import React from "react";

import '../HeaderConteudo/HeaderConteudo.scss'

import SocialMedia from '../../SocialMedias/SocialMedia.jsx';
import WhatsAppLink from '../../WhatsAppLink/WhatsAppLink.jsx';
import Avatar from '../Avatar/Avatar.jsx';

import DownloadCV from '../../../Download/RichardsonSouzaCV.pdf';

import ArrowLineDown from '../../../assets/SvgImages/ArrowLineDown.svg';

function headerconteudo() {
    return(
        <div className="Header-conteudo">
            <div className="Header-Apresentacao">
                <div className="Title-Component">
                    <span><p>👋 Saudações!</p></span>
                    <h1>Richardson<br/>Souza</h1>
                </div>
                <p>Front-end developer</p>
                <SocialMedia/>
            </div>

            <Avatar/>

            <div className="header-contato">
                <span className="downloadcv">
                    <a href={DownloadCV} download="Richardson Souza CV"><h5>Baixar CV</h5>
                    <img src={ArrowLineDown} alt="imagem svg" />
                    </a>
                </span>
                <WhatsAppLink/>
            </div>
        </div>
    )
}

export default headerconteudo;