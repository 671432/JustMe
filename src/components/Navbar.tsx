import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useIsMobile } from "../hooks/IsMobile";
import { MobileNavbar } from "./MobileNavbar";

export function Navbar() {
  const isMobile = useIsMobile();

  if (isMobile) return <MobileNavbar />;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/JustMe/logo.jpg" alt="JustMe logo" className="logo-img" />
        <div className="site-name"><Link to="/">JustMe</Link></div>
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
