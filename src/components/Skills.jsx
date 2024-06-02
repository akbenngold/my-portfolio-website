// src/Carousel.js
import React, { useEffect, useRef } from "react";

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
        className="carousel py-6 flex gap-24 star-list text-neutral-300 bg-neutral-800"
        ref={carouselRef}
      >
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Firebase</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>Tailwind</li>
        <li>Figma</li>
        <li>ReactJS</li>
        <li>VueJS</li>
        <li>Redux</li>
        <li>Git</li>
      </ul>
    </div>
  );
};

export default Skills;
