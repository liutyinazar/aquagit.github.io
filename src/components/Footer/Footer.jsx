import "./Footer.scss";
import instagram from "../assets/images/instagram.svg";
import email from "../assets/images/email.svg";
import linkedin from "../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="border">
        <div className="footer_wrapper">
          <div className="footer_left">
            <a href="/#">Xedrum</a>
          </div>
          <div className="footer_center">
            <h5>All Rights Reserved. Xedrum 2023 </h5>
            <a href="/">Privacy policy</a>
          </div>

          <div className="footer-right">
            <a href="/">
              <img src={email} alt="email" />
            </a>
            <a href="/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/xedrum/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
