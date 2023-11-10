import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Project from "./Pages/Project";
import About from "./Pages/About";
function App() {
  return (
    <Routes>
      <Route path="/PORTFOLIO" element={<Home />}></Route>
      <Route path="/PORTFOLIO/contact" element={<Contact />}></Route>
      <Route path="/PORTFOLIO/project" element={<Project />}></Route>
      <Route path="/PORTFOLIO/about" element={<About />}></Route>
    </Routes>
  );
}

export default App;
