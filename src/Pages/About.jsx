import React from 'react'
import Navbar from "./../Component/Navbar.jsx";

import Footer from "./../Component/Footer.jsx";
import Heroimage2 from '../Component/Heroimage2.jsx';
import Aboutcontent from '../Component/Aboutcontent.jsx';
export default function About() {
  const obj = { heading: "ABOUT ME", text: "I am a begineer Backend developer" };
  return (
    <div>
      <Navbar />
      <Heroimage2 data={obj} />
      <Aboutcontent/>
      <Footer />
    </div>
  );
}
