import React from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

function Projects() {
  return (
    <div>
      <Hero title="MY PROJECTS" subtitle="MADE WITH LOVE" />
      <div className="main projects">
        <ProjectCard
          image="src/assets/projectcard.svg"
          nameOfProject="project name"
          technologies="tech used"
        />
        <ProjectCard
          image="src/assets/projectcard.svg"
          nameOfProject="project name"
          technologies="tech used"
        />
        <ProjectCard
          image="src/assets/projectcard.svg"
          nameOfProject="project name"
          technologies="tech used"
        />
        <ProjectCard
          image="src/assets/projectcard.svg"
          nameOfProject="project name"
          technologies="tech used"
        />
        <ProjectCard
          image="src/assets/projectcard.svg"
          nameOfProject="project name"
          technologies="tech used"
        />
        <Button
          className="projectbutton"
          arrow={String.fromCharCode(8594)}
          label="Contact me"
        />
      </div>
    </div>
  );
}

export default Projects;
