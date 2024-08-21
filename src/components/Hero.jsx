import React from "react";
import Button from "./Button";
import ojima from "../assets/ojima.png";
import { TiDocumentText, TiMessages } from "react-icons/ti";
function Hero() {
  return (
    <div className="hero min-h-screen md:min-h-[60vh]  bg-inherit pb-16 pt-8 section-container">
      <div className="hero-content flex-col md:flex-row-reverse gap-8 justify-center">
        <img
          src={ojima}
          className="max-w-[15rem] md:max-w-sm bg-yellow rounded-full shadow-2xl"
        />
        <div>
          <h1 className="text-3xl md:text-4xl  text-center md:text-start ">
            Hey, I'm{" "}
            <span className="brush-underline font-semibold text-3xl md:text-5xl">
              OJIMA
            </span>
            <br />
            <span className="block mt-4">
              a creative{" "}
              <span className="text-neutral-700 font-semibold">
                Frontend Developer
              </span>
            </span>
          </h1>
          <ul className="py-6 text-xs min-[400px]:text-sm md:text-base flex gap-6 star-list justify-center md:justify-start">
            <li>Frontend</li>
            <li>Technical Writing</li>
            <li>UI Design</li>
          </ul>
          <div className="flex gap-8 justify-center md:justify-start">
            {" "}
            <a href="src/assets/resume.docx" download="ojima_resume.docx">
              <button className="btn border-2 border-black bg-none rounded-full">
                {" "}
                <TiDocumentText /> Download Resume
              </button>
            </a>
            <Button>
              <TiMessages />
              <a href="#contact-me"> Let's Talk</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
