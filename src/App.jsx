import React from "react";

import { useRef } from "react";
import { useInView } from "framer-motion";

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

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function App() {
  return (
    <div className=" bg-[#f0f0ed] overflow-hidden  relative">
      <Navbar />
      <ProgressBar />
      <Section>
        <Hero />
      </Section>

      <Skills />
      <Section>
        <Services />
      </Section>
      <hr />
      <Section>
        <Portfolio />
      </Section>
      <hr />
      <Section>
        <AboutMe />
      </Section>
      <hr />
      <Section>
        <ContactMe />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
