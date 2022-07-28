import React from "react";
import { BrowserRouter } from "react-router-dom";
import Conversation from "./components/Conversation";
import Header from "./components/Header";
import HeroComp from "./components/HeroComp";
import OurTeam from "./components/OurTeam";
import UnderHero from "./components/UnderHero";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <HeroComp />
      <UnderHero />
      {/* <OurTeam /> */}
      <Conversation />
    </BrowserRouter>
  );
};

export default App;
