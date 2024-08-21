import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Portfolio from "./components/Porfolio";
import ContactMe from "./components/ContactMe";
import ProgressBar from "./components/ProgressBar";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className=" bg-[#f0f0ed] overflow-hidden  relative">
      <Navbar />
      <ProgressBar />
      <Hero />

      <Skills />
      <Services />
      <hr />
      <Portfolio />
      <hr />
      <AboutMe />
      <hr />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
