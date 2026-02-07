import "../assets/styles/Card.scss";

export default function Card() {
  return (
    <section className="feature-card" data-aos="fade-up">
      <div
        className="feature-card-content"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <h2>OpenType feature and Variable fonts</h2>

        <button
          className="feature-card-button"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Try For Free
        </button>
      </div>

      <div
        className="feature-card-image"
        data-aos="fade-left"
        data-aos-delay="200"
      />
    </section>
  );
}
