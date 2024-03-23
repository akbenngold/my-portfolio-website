import React from "react";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img className="project-card__image" src={props.image} alt="" />
      <div className="project-card__description">
        <h3>{props.nameOfProject}</h3>
        <h4>{props.technologies}</h4>
      </div>
    </div>
  );
}

export default ProjectCard;
