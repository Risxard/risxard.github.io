import React from "react";

import { Logo } from '../../../assets/SvgImages/Logo.jsx';
import './Navigation.scss';


function Navigation() {
    return (
        <nav className="navigation">
            <Logo/>
        <ul>
            <li id="Home"><a href="#BackToTop">Home</a></li>
            <li><a href="#SobreMim">Sobre mim</a></li>
            <li><a href="#Portfolio">Portfólio</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Carreira">Carreira</a></li>
            <li><a href="#Contato">Contato</a></li>
        </ul>
    </nav>
    )
}

export default Navigation;