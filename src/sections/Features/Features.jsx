import "./Features.scss";
import features from "../../assets/images/features.png";

const Features = () => {
  return (
    <section className="features">
      <div className="features-content">
        <h2 className="features-title">Features</h2>

        <p className="features-text">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>

        <img
          src={features}
          alt="Features illustration"
          className="features-image"
        />
      </div>
    </section>
  );
};

export default Features;
