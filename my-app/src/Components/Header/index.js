import "./styles.css";

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="./logo.png" alt="logo" width="44"/>
        <h3>Astral Nexus</h3>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/" className="hover-underline-animation">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover-underline-animation">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover-underline-animation">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover-underline-animation">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
