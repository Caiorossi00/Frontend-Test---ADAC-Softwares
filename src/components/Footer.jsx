import "../assets/styles/Footer.scss";
import facebook from "../assets/images/footer/facebook.png";
import linkedin from "../assets/images/footer/linkedin.png";
import x from "../assets/images/footer/x.png";
import map from "../assets/images/footer/map.png";
import mobile from "../assets/images/footer/mobile.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Fingertipe</h4>
            <ul>
              <li>Home</li>
              <li>Examples</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Home</li>
              <li>Examples</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>Home</li>
              <li>Examples</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-contact-item">
            <img src={map} alt="" />
            <p>7480 Mockingbird Hill undefined</p>
          </div>

          <div className="footer-contact-item">
            <img src={mobile} alt="" />
            <p>(239) 555-0108</p>
          </div>

          <div className="footer-social">
            <img src={x} alt="X" />
            <img src={facebook} alt="Facebook" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>
      </div>
    </footer>
  );
}
