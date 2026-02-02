import { useState } from "react";
import logo from "../assets/images/logo-dark.png";
import menuIcon from "../assets/images/mobile-menu.png";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Figma Land" className="navbar-logo" />

      <ul className={`navbar-menu ${menuOpen ? "is-open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="navbar-actions">
        <button type="button" className="navbar-button">
          Login
        </button>

        <button
          className="navbar-hamburger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="navbar-close">✕</span>
          ) : (
            <img src={menuIcon} alt="" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
