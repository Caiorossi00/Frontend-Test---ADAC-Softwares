import "./Features.scss";
import featureCard1 from "../../assets/images/features/ChatBot.png";
import featureCard2 from "../../assets/images/features/Line-chart.png";
import restaurant from "../../assets/images/features/restaurant.png";
import alien from "../../assets/images/features/alien.png";
import vector from "../../assets/images/features/vector.png";

const featuresList = [
  {
    icon: restaurant,
    title: "A single source of truth",
    description:
      "When you add work to your Slate calendar we automatically calculate useful insights",
  },
  {
    icon: alien,
    title: "Intuitive interface",
    description:
      "When you add work to your Slate calendar we automatically calculate useful insights",
  },
  {
    icon: vector,
    title: "Or with rules",
    description:
      "When you add work to your Slate calendar we automatically calculate useful insights",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features-content">
        <h2 className="features-title">Features</h2>
        <p className="features-text">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>

        <div className="features-layout">
          <div className="features-images">
            <img
              src={featureCard1}
              alt=""
              className="features-image features-image--main"
            />
            <img
              src={featureCard2}
              alt=""
              className="features-image features-image--overlay"
            />
          </div>

          <div className="features-list">
            {featuresList.map((item, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-header">
                  <div className="feature-icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <h3 className="feature-title">{item.title}</h3>
                </div>

                <p className="feature-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
