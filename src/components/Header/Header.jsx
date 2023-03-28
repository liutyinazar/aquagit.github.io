import React, { useState, useEffect } from "react";
import "./Header.scss";
import logo from "../assets/images/logo.svg";

import { Link } from "react-scroll";

const Header = () => {
  //burger
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // закрываем меню при клике на ссылку
  };

  //scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //scrollup button
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : "noscrolled"}`}>
      <div className="border">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" onClick={handleClick} />
          </div>

          <div className={`menu ${isOpen ? "open" : "closed"}`}>
            <ul className="menu-list">

              <li className="menu-item">
                <Link
                  to="about"
                  smooth={true}
                  duration={50}
                  onClick={handleLinkClick}
                >
                  <a href="/" className="menu-link">
                    About
                  </a>
                </Link>
              </li>

              <li className="menu-item">
                <Link
                  to="technologies"
                  smooth={true}
                  duration={50}
                  onClick={handleLinkClick}
                >
                  <a href="/" className="menu-link">
                    Technologies
                  </a>
                </Link>
              </li>

              <li className="menu-item">
                <Link
                  to="services"
                  smooth={true}
                  duration={50}
                  onClick={handleLinkClick}
                >
                  <a href="/" className="menu-link">
                    Services
                  </a>
                </Link>
              </li>

              <li className="menu-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={50}
                  onClick={handleLinkClick}
                >
                  <a href="/" className="menu-link">
                    Contact
                  </a>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="burger" onClick={handleMenuClick}>
            <button className="button_menu" type="button">
              <span class="btn_line"></span>
              <span class="btn_line"></span>
              <span class="btn_line"></span>
              <span class="btn_line"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
