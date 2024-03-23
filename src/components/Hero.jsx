import PropTypes from "prop-types";

function Hero(props) {
  return (
    <section className="hero">
      <span className="hero__title">{props.title}</span>
      <span className="hero__subtitle">{props.subtitle}</span>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
