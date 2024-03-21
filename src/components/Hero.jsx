import PropTypes from "prop-types";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__stitle">{props.title}</div>
      <div className="hero__subtitle">{props.subtitle}</div>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
