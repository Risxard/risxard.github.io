import React, { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import Header from "./components/header/Header.jsx";

import BtnTop from './components/BtnTop.jsx'

function App() {


  return (
    <>
      <Header />
      <Main />
      <Footer />
      <BtnTop/>
    </>
  );
}

export default App;
