import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Portfolio from "./components/Porfolio";
function App() {
  return (
    <div className=" bg-[#f0f0ed] overflow-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
