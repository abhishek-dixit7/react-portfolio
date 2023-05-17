import { React, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#project">Projects</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <div className="portfolio__navbar section__padding">
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="portfolio__navbar-links_container">
          <Menu />
        </div>
        <div className="portfolio__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => settoggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => settoggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="portfolio__navbar-menu_container scale-up-center">
              <div className="portfolio__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
