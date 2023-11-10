import { React, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  console.log("navbar");
  const [click, setclick] = useState(false);
  const [color, setcolor] = useState(false);
  const handleclick = () => {
    setclick(!click);
  };
  const changecolor = () => {
    if (window.scrollY>= 100)
    {
      setcolor(true);
    }
    else {
      setcolor(false);
    }
  }
  window.addEventListener("scroll", changecolor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>
          <div className="extra">Samman </div>
        </h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/PORTFOLIO"> Home</Link>
        </li>
        <li>
          <Link to="/PORTFOLIO/project"> Project</Link>
        </li>
        <li>
          <Link to="/PORTFOLIO/about"> About</Link>
        </li>
        <li>
          <Link to="/PORTFOLIO/contact"> Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleclick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}
