import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">AboutMe</a>
    </p>
    <p>
      <a href="#project">Projects</a>
    </p>
    <p>
      <a href="#contact">ContactMe</a>
    </p>
  </>
);

const Navbar = () => {
  return (
    <div className="portfolio__navbar section__padding">
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="portfolio__navbar-links_container">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
