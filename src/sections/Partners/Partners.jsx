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
        <h2 className="partners-title">Partners</h2>
        <p className="partners-text">
          We focus on ergonomics and meeting you where you work.
          <br />
          It's only a keystroke away.
        </p>
      </div>

      <div className="partners-logos">
        <img src={logoApple} alt="Apple App Store" />

        <img src={logoApiary} alt="Apiary" />
        <img src={logoAndroid} alt="Android" />

        <img src={logoBasecamp} alt="Basecamp" />
        <img src={logoAirbnb} alt="Airbnb" />
        <img src={logoIbm} alt="IBM" />
      </div>
    </section>
  );
};

export default Partners;
