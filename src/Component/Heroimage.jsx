// @ts-nocheck
import "./Herocss.css";
import React from "react";
import Introimg from './../assets/p5.jpg';
import { Link } from 'react-router-dom';

export default function Heroimage() {
    return (
      <div className="hero">
        <div className="mask">
          <img className="into-img" src={Introimg} />
        </div>
        <div className="content">
          <p> HI,I'M Samman Amgain </p>
          <h1> MERN STACK Developer. </h1>
          <div>
            <Link to="/PORTFOLIO/project" className="btn">
              {" "}
              Projects
            </Link>
            <Link to="/PORTFOLIO/contact" className="btn btn-light">
              {" "}
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
}
