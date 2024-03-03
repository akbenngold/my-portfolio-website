import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.image} alt="" />
      <div className="description">
        <h3>{props.nameOfProject}</h3>
        <h4>{props.technologies}</h4>
      </div>
    </div>
  );
}

export default ProjectCard;
