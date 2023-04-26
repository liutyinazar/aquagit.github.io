import "./About.scss";
import about from "../assets/images/about_image.jpg";

// import React, { useState } from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about">
      <div className="border">
        <div className="about_wrapper">
          <div className="about_text">
            <div className="about_title">
              <h1>What is Xedrum?</h1>
            </div>
            <p>
              Xedrum is a team of highly skilled developers and managers. Each
              team member has a lot of experience in developing and
              implementing/integrating different systems. We are always happy to
              help with developing any solutions you needed. The whole team is
              located in the safest city in Ukraine - Lviv, so you shouldn't
              care about our durability 🇺🇦.
            </p>

            <p>
              Our main point is to follow and help a client during the whole
              cooperation from the concept to the final solution with the
              following maintenance/support. Also, we work with existing systems
              to slightly implement new features and support for the future. Our
              team with huge expertise in different scopes can easily
              investigate an existing solution and develop it on the spot.
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
                <Link to="works" smooth={true} duration={50}>
                  <button href="/" className="main_btn">
                    Our works
                  </button>
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
