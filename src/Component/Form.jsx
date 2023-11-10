import React from 'react'
import "./Form.css";
export default function Form() {
   const handleFormSubmit = () => {
     const name = document.getElementById("name").value;
     const email = document.getElementById("email").value;
     const subject = document.getElementById("subject").value;
     const message = document.getElementById("message").value;

    const toEmail = "amgain02@gmail.com"; // Replace with your actual email address
    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\n\n Message: ${message}`)}`;

     window.location.href = mailtoLink;
   };
  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <label>Your Name</label>
        <input type="text" id='name'></input>
        <label>Email</label>
        <input type="email" id='email'></input>
        <label>Subject</label>
        <input type="text" id='subject'></input>
        <label>Message</label>
        <textarea rows="6" placeholder="TYPE YOUR MESSAGE HERE" id='message'></textarea>
        <button type="submit" className="btn">
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}
