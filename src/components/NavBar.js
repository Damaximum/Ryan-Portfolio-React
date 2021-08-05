import React from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    padding: 20,
    backgroundColor: "#9433d24",
  },
  mainHeader: {
    fontSize: 50,
  },
  navbarTabs: {
    fontSize: 20,
  },
};

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={styles.nav}
    >
      <Link className="navbar-brand mx-auto" to="/" style={styles.mainHeader}>
        Ryan Lee
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto" style={styles.navbarTabs}>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
