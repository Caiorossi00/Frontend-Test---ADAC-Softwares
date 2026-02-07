import "./Partners.scss";

import logoAirbnb from "../../assets/images/partners/logos_airbnb.png";
import logoAndroid from "../../assets/images/partners/logos_android-icon.png";
import logoApiary from "../../assets/images/partners/logos_apiary.png";
import logoApple from "../../assets/images/partners/logos_apple-app-store.png";
import logoBasecamp from "../../assets/images/partners/logos_basecamp.png";
import logoIbm from "../../assets/images/partners/logos_ibm.png";

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-header">
        <h2 className="partners-title" data-aos="fade-up">
          Partners
        </h2>

        <p className="partners-text" data-aos="fade-up" data-aos-delay="150">
          We focus on ergonomics and meeting you where you work.
          <br />
          It's only a keystroke away.
        </p>
      </div>

      <div className="partners-logos" data-aos="zoom-in">
        {[
          logoApple,
          logoApiary,
          logoAndroid,
          logoBasecamp,
          logoAirbnb,
          logoIbm,
        ].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt=""
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          />
        ))}
      </div>

      <button
        className="partners-button"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        All Partners
      </button>
    </section>
  );
};

export default Partners;
