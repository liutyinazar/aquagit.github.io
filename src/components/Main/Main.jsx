import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Main.scss";

const Main = () => {
  const [, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // закрываем меню при клике на ссылку
  };

  return (
    <div className="main">
      <div className="border">
        <div className="main_wrapper">
          <div className="main_title">
            <h1>Our clients discover some surprise benefits of doing business with us they did not expect</h1>
          </div>
          <Link
            to="contact"
            smooth={true}
            duration={50}
            onClick={handleLinkClick}
          >
            <button className="main_btn">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
