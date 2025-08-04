import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MobileNavbar.css"; // You can style this separately

export function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-top">
        <div className="mobile-navbar-left">
          <img src="/JustMe/logo.jpg" alt="JustMe logo" className="logo-img" />
          <div className="site-name"><Link to="/">JustMe</Link></div>
        </div>
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Slide-in menu */}
      <div className={`mobile-menu-slide ${open ? "open" : ""}`}>
        <ul className="mobile-menu">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About Me</Link></li>
          <li><Link to="/socials" onClick={() => setOpen(false)}>Socials & Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}
