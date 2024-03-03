import React from "react";
import Hero from "../components/Hero";
import "./Home.css";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

function Home(props) {
  return (
    <>
      <Hero title="YOUR NAME" subtitle="FRONTEND DEVELOPER" />

      <div className="content">
        <div className="home__about-me">
          <div className="home__subtitle home__about">About me</div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>
        </div>
        <div className="home__my-skills">
          <div className="home__subtitle">My Skills</div>
          <ul className="home__skills-list">
            <li>
              <img className="skill-icon" src="src/assets/reactt.svg" />
              reactjs
            </li>
            <li>
              <img className="skill-icon" src="src/assets/sass.svg" />
              Sass
            </li>
            <li>
              <img className="skill-icon" src="src/assets/sass.svg" />
              tailwind
            </li>
            <li>
              <img className="skill-icon" src="src/assets/vue.svg" />
              vue
            </li>
            <li>
              <img className="skill-icon" src="src/assets/sass.svg" />
              typrscript
            </li>
            <li>
              <img className="skill-icon" src="src/assets/sass.svg" />
              css
            </li>
          </ul>
        </div>
        <div className="home__projects">
          <ProjectCard
            image="src/assets/projectcard.svg"
            nameOfProject="project name"
            technologies="tech used"
          />
        </div>
        <div className="home__buttons">
          <Button arrow="../assets/arrow.svg" label="All Projects" />
          <Button label="Contact me" />
        </div>
      </div>
    </>
  );
}

export default Home;
