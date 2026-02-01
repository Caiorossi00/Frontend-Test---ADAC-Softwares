import logo from "../assets/images/logo-dark.png";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Figma Land" className="navbar-logo" />

      <ul className="navbar-menu">
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

      <button type="button" className="navbar-button">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
