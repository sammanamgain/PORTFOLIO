import "./Footercss.css";
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa";
export default function Footer() {
    console.log("is it calling dude")
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Lolang,Kathmandu</p>
              <p> Nepal</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              9847289980
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              amgain02@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>Finding the Job</p>
          <div className="social">
            <a href="https://github.com/sammanamgain">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://twitter.com/Amgain_Samman_">
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/samman-amgain-3985181b0/">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
