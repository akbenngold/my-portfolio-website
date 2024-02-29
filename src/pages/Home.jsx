import React from "react";
import Hero from "../components/Hero";
import "./Home.css";
import ProjectCard from "../components/ProjectCard";

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
          <ul>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
          </ul>
        </div>
        <div className="home__projects">
          <ProjectCard nameOfProject="project name" technologies="tech used" />
          <ProjectCard nameOfProject="project name" technologies="tech used" />
          <ProjectCard nameOfProject="project name" technologies="tech used" />
        </div>
        <div className="home__buttons">
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z"
                fill="black"
              />
            </svg>
            All Projects
          </button>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z"
                fill="black"
              />
            </svg>
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
