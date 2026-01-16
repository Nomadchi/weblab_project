import React from "react";
import { Link } from "@reach/router"

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">Catbook</div>
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link className="NavBar-link" to="/">Home</Link>
        <Link className="NavBar-link" to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default NavBar;
