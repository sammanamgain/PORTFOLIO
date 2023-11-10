import React from 'react';
import Navbar from "./../Component/Navbar.jsx";
import Heroimage2 from "../Component/Heroimage2.jsx";
import Footer from "./../Component/Footer.jsx";
import Form from "./../Component/Form.jsx";
export default function Contact() {
    const obj = { heading: "CONTACT ME", text: "Let's have a chat" };
  return (
    <div>
      <Navbar />
      <Heroimage2 data={obj} />
      <Form/>
      <Footer />
    </div>
  );
}
