import IntroMain from "./IntroMain/IntroMain";
import Portfolio from "./Portfolio/Portfolio";
import Carreira from "./Carreira/Carreira";
import Skills from "./Skills/Skills";
import AboutMe from "./AboutMe/AboutMe";

const Main = () => {
  return (
    <main>
      <IntroMain />
      <AboutMe/>
      <Portfolio />
      <Skills />
      <Carreira />
    </main>
  );
};

export default Main;
