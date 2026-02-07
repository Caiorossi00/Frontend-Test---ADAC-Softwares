import testimonialList from "./data";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2 className="testimonials-title" data-aos="fade-up">
          Testimonials
        </h2>
      </div>

      <div className="testimonial-card-container">
        {testimonialList.map((item, index) => (
          <div
            className="testimonial-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <p className="testimonial-text">{item.testimonial}</p>

            <div className="testimonial-infos">
              <img src={item.image} alt={item.name} />

              <div className="infos-text">
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
