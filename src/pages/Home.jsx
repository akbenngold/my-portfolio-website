import Hero from "../components/Hero";
// import PropTypes from "prop-types";
// import "./Home.css";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

// eslint-disable-next-line no-unused-vars
function Home(props) {
  return (
    <>
      <Hero title="YOUR NAME" subtitle="FRONTEND DEVELOPER" />

      <main className="main home">
        <section className="home__about">
          <h2 className="home__subtitle">About me</h2>
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
        </section>

        <section className="home__skills">
          <h2 className="home__subtitle">My Skills</h2>
        </section>
        <section className="home__projects">
          <ProjectCard
            image="../../src/assets/projectcard.svg"
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
