import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/JustMe/logo.jpg" alt="JustMe logo" className="logo-img" />
        <div className="site-name">JustMe</div>
      </div>
      <ul className="navbar-right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/socials">Socials & Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
