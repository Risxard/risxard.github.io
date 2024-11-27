import { useEffect, useState } from "react";
import { getAllProjects } from "../../lib/dato-cms";
import IntroMain from "./IntroMain/IntroMain";
import Portfolio from "./Portfolio/Portfolio";
import Carreira from "./Carreira/Carreira";
import Skills from "./Skills/Skills";

const Main = () => {
  return (
    <main>
      <IntroMain />
      <Portfolio />
      <Skills />
      <Carreira />
    </main>
  );
};

export default Main;
