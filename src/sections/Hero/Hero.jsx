import "./Hero.scss";
import screens from "../../assets/images/screens.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title" data-aos="fade-up">
          Work at the speed of thought
        </h1>

        <p className="hero-text" data-aos="fade-up" data-aos-delay="150">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>

        <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
          <button className="hero-button primary">Try for free</button>

          <button className="hero-button secondary">Learn more</button>
        </div>

        <img
          src={screens}
          alt="Screens"
          className="hero-image"
          data-aos="zoom-in"
          data-aos-delay="450"
        />
      </div>
    </section>
  );
};

export default Hero;
