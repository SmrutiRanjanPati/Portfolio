import React, { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";
import "./../css/navbar.css";
import DarkMode from "./DarkMode";
import logoImage from "../Assests/logo.png";
function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [prevActiveLink, setPrevActiveLink] = useState(null);

  useEffect(() => {
    if (prevActiveLink !== activeLink) {
      setPrevActiveLink(activeLink);
    }
  }, [activeLink, prevActiveLink]);
  const handleLogoClick = () => {
    // Scroll to the "aboutme" section when "Read More" is clicked
    scroller.scrollTo("home", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className="navbar">
      <div className="navbar_design">
        <div className="navbar_style">
          <div className="navbar_logo">
            <img onClick={handleLogoClick} src={logoImage} alt="logo" />
          </div>
          <div className="navbar_main">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => setActiveLink("home")}
            >
              home
            </Link>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => setActiveLink("portfolio")}
            >
              portfolio
            </Link>
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-1}
              duration={500}
              onSetActive={() => setActiveLink("aboutme")}
            >
              about me
            </Link>
            <Link
              activeClass="active"
              to="contactme"
              spy={true}
              smooth={true}
              offset={+50}
              duration={500}
              onSetActive={() => setActiveLink("contactme")}
            >
              contact me
            </Link>
          </div>
          <DarkMode/>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
