import Hero from "../components/Hero";
// import PropTypes from "prop-types";
// import "./Home.css";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

import image from "../assets/projectcard.svg";

// eslint-disable-next-line no-unused-vars
function Home(props) {
  return (
    <>
      <Hero greeting="Hi👋, I'm" title="OJIMA" subtitle="FRONTEND DEVELOPER" />

      <main className="main home">
        <section className="home__about">
          <h2 className="home__subtitle">About me</h2>
          <p>
            <span>
              I'm a passionate frontend developer with experience crafting
              user-centric web applications. Proficient in HTML, CSS,
              JavaScript. I specialize in creating responsive, intuitive
              interfaces that enhance user experience.
            </span>{" "}
            <span>
              My expertise extends to modern frameworks and libraries such as
              React, Redux, Vue, Tailwind, Sass where I've led successful
              projects from concept to deployment. I have a keen eye for design
              and a commitment to clean, maintainable code.
            </span>{" "}
            <span>
              {" "}
              My experience in technical writing enables me to write clear and
              comprehensive documentation. I thrive in collaborative
              environments where innovation and creativity drive results. Let's
              build something remarkable together.
            </span>
          </p>
        </section>

        <section className="home__skills">
          <h2 className="home__subtitle">My Skills</h2>
        </section>
        <section className="home__projects">
          <ProjectCard
            image={image}
            nameOfProject="project name"
            technologies="tech used"
          />
        </section>
        <div className="home__buttons">
          <Button arrow={String.fromCharCode(8594)} label="All Projects" />
          <Button arrow={String.fromCharCode(8594)} label="Contact me" />
        </div>
      </main>
    </>
  );
}

// Home.propTypes = {

// };

export default Home;
