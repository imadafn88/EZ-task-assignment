import React from "react";
import "./styles/globals.css";
import "./styles/responsive.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import AboutTeam from "./components/AboutTeam/AboutTeam";
import AboutUs from "./components/AboutUs/AboutUs";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutTeam />
        <AboutUs />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
