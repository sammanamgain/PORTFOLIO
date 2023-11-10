import React from 'react';
import Navbar from "./../Component/Navbar.jsx";

import Footer from "./../Component/Footer.jsx";
import Heroimage2 from "./../Component/Heroimage2.jsx";
import Work from '../Component/Work.jsx';

export default function Project() {
  const obj = {heading: "PROJECTS.", text: "My recent best work" };
  return (
    <div>

      <Navbar />
      <Heroimage2 data={obj} />
      <Work/>
      <Footer/>
    </div>
  )
}
