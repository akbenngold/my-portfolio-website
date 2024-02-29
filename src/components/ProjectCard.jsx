import React from "react";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.nameOfProject}</h3>
      <h4>{props.technologies}</h4>
    </div>
  );
}

export default ProjectCard;
