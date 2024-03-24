import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a server
    console.log("Form submitted:", formData);
    // You may want to reset the form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="formfield">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formfield">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formfield">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Hello Ojima, I'm messaging you for..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Send message</button>
    </form>
  );
}

export default Form;
