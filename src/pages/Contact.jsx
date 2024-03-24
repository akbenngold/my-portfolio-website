import React from "react";
import Hero from "../components/Hero";
import Form from "../components/Form";

function Contact() {
  return (
    <div>
      <Hero title="CONTACT ME" subtitle="SAY HELLO TO ME" />
      <div className="main">
        <h2>Contact me</h2>
        <Form />
      </div>
    </div>
  );
}

export default Contact;
