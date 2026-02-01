import "./Hero.scss";
import screens from "../../assets/images/screens.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Work at the speed of thought</h1>

        <p className="hero-text">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>

        <div className="hero-actions">
          <button className="hero-button primary">Try for free</button>

          <button className="hero-button secondary">Learn more</button>
        </div>

        <img src={screens} alt="Screens" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
