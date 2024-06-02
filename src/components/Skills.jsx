// src/Carousel.js
import React, { useEffect, useRef } from "react";
import { FaCss3, FaFigma, FaReact, FaSass, FaVuejs } from "react-icons/fa6";
import { IoGitBranchOutline } from "react-icons/io5";
import { RiFirebaseLine, RiJavascriptLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";

const Skills = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const items = Array.from(carousel.children);

    // Duplicate items for seamless scrolling
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });

    const keyframes = `
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  return (
    <div className="carousel-container" id="services">
      <ul
        className="carousel py-6 flex gap-24  text-neutral-300 bg-neutral-800"
        ref={carouselRef}
      >
        <li>
          <RiJavascriptLine />
          JavaScript
        </li>
        <li>
          <TbBrandTypescript />
          TypeScript
        </li>
        <li>
          <RiFirebaseLine />
          Firebase
        </li>
        <li>
          <FaCss3 />
          CSS
        </li>
        <li>
          <FaSass />
          Sass
        </li>
        <li>
          <TbBrandTailwind />
          Tailwind
        </li>
        <li>
          <FaFigma /> Figma
        </li>
        <li>
          <FaReact /> ReactJS
        </li>
        <li>
          <FaVuejs /> VueJS
        </li>
        <li>
          <SiRedux />
          Redux
        </li>
        <li>
          <IoGitBranchOutline />
          Git
        </li>
      </ul>
    </div>
  );
};

export default Skills;
