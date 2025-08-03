import React from "react";
import "./index.css";
import Header from "./components/HeaderSection";
import Hero from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Connect from "./components/Connects";
function App() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Works />
        <Connect />
      </div>
    </>
  );
}

export default App;
