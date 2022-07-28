import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HeroComp from "./components/HeroComp";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <HeroComp />
    </BrowserRouter>
  );
};

export default App;
