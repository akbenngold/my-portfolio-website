import React from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import image from "../assets/projectcard.svg";

function Projects() {
  return (
    <div>
      <Hero title="MY PROJECTS" subtitle="MADE WITH LOVE" />
      <div className="main projects">
        <ProjectCard
          image={image}
          nameOfProject="project name"
          technologies="tech used"
        />
        <ProjectCard
          image={image}
          nameOfProject="project name"
          technologies="tech used"
        />
        <ProjectCard
          image={image}
          nameOfProject="project name"
          technologies="tech used"
        />
        <ProjectCard
          image={image}
          nameOfProject="project name"
          technologies="tech used"
        />
        <ProjectCard
          image={image}
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
