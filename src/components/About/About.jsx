import "./About.scss";
import about from "../assets/images/about_image.jpg";

import React, { useState } from "react";
import { Link } from "react-scroll";

const About = () => {
  const [, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // закрываем меню при клике на ссылку
  };

  return (
    <div className="about">
      <div className="border">
        <div className="about_wrapper">
          <div className="about_text">
            <div className="about_title">
              <h1>What is Xedrum?</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque voluptate molestias nostrum quaerat fugit pariatur
              necessitatibus rerum ad, quam minima. Eos dicta possimus
              architecto explicabo perferendis voluptas veritatis laudantium
              voluptatem!Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sed nam veritatis distinctio ipsum officia, a
              aspernatur magnam rerum odit ea aperiam vel modi culpa! Ullam at
              expedita debitis eaque amet?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque voluptate molestias nostrum quaerat fugit pariatur
              necessitatibus rerum ad, quam minima. Eos dicta possimus
              architecto explicabo perferendis voluptas veritatis laudantium
              voluptatem!Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sed nam veritatis distinctio ipsum officia, a
              aspernatur magnam rerum odit ea aperiam vel modi culpa! Ullam at
              expedita debitis eaque amet?
            </p>
          </div>
          <div className="about_image">
            <img src={about} alt="about1" />
            <div className="about_image_items">
              <div className="about_image_text">
                <p>Xedrum|Projects </p>
                <h1>For our customers</h1>
              </div>
              <div className="about_image_btn">
                <Link
                  to="works"
                  smooth={true}
                  duration={50}
                  onClick={handleLinkClick}
                >
                  <button className="main_btn">Our works</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
