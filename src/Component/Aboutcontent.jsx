import React from "react";
import "./Aboutcss.css";
import { Link } from 'react-router-dom';
import pimg from "./../assets/p5.jpg";
export default function Aboutcontent() {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I?</h1>
        <p>
          {" "}
          I'm a computer engineering student deeply passionate about technology.
          Currently, I focus on the MERN stack for web applications, use Flutter
          for mobile development, and have experience with Django. I've also
          worked on projects involving deep learning and machine learning,
          showcasing my versatility in cutting-edge technologies. In pursuit of
          my Computer Engineering degree, I'm dedicated to honing my programming
          skills and staying at the forefront of tech advancements. Throughout
          my academic journey, I've gained practical experience in turning ideas
          into functioning software solutions. Beyond my technical pursuits, I
          explore deep learning and machine learning, enhancing my understanding
          of AI. This holistic approach helps me stay creative and well-rounded.
          Eager to tackle new challenges, learn from every experience, and
          contribute to the evolving tech landscape. Let's connect and explore
          the possibilities of building something amazing together!
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img className="img" src={pimg} />
          </div>
          <div className="img-stack bottom">
            <img className="img" src={pimg} />
          </div>
        </div>
      </div>
    </div>
  );
}
