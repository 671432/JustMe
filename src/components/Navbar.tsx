import React from "react";
import "../styles/Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.jpg" alt="JustMe logo" className="logo-img" />
        <div className="site-name">JustMe</div>
      </div>
      <ul className="navbar-right">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/about">About Me</a>
        </li>
        <li>
          <a href="/socials">Socials & Projects</a>
        </li>
      </ul>
    </nav>
  );
}
