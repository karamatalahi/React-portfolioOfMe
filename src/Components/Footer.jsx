import "./Footer.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>137, Mehta Mohallah</p>
              <p>Surankote,Indai (185121)</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +91-9149891897
            </h4>
          </div>

          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              karamatalahi123@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h1>About this Text</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            quis autem tenetur fugiat nostrum nemo eos fuga, illum numquam
            ipsum, a libero suscipit distinctio, blanditiis placeat obcaecati
            unde culpa odio?
          </p>
          <div className="social">
            <FaFacebook
            className="icon"
              size={20}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaTwitter
            className="icon"
              size={20}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaLinkedin
            className="icon"
              size={20}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
