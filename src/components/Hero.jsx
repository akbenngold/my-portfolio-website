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
          className="max-w-xs md:max-w-sm bg-yellow rounded-full shadow-2xl"
        />
        <div>
          <h1 className="text-3xl md:text-5xl uppercase text-center md:text-start">
            HEY, I'M OJIMA <br />A CREATIVE WEB{" "}
            <span className="brush-underline">DEVELOPER</span>
          </h1>
          <ul className="py-6 text-sm md:text-base flex gap-6 star-list justify-center md:justify-start">
            <li>Frontend</li>
            <li>Technical Writing</li>
            <li>UI Design</li>
          </ul>
          <div className="flex gap-8 justify-center md:justify-start">
            {" "}
            <button className="btn border-2 border-black bg-none rounded-full">
              <TiDocumentText /> Resume
            </button>
            <Button>
              <TiMessages /> Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
