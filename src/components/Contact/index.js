import React, { useState } from "react";
import "../Contact/Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = event => {
    const request = JSON.stringify({
      name: name,
      email: email,
      message: message
    });
    fetch("https://www.usebasin.com/f/c177f0920b56.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: `${request}`
    }).then(response => {
      if (response.ok) {
        console.log(!"response ok");
        alert(
          "Your message was submitted successfully, David will be in contact with you soon."
        );
        setName("");
        setEmail("");
        setMessage("");
        event.preventDefault();
      } else {
        console.log("error!");
        alert("Something went wrong, try again later");
        event.preventDefault();
      }
    });
    event.preventDefault();
  };

return (
    <div className="contact">
      <h2 className="contact__head">Contact</h2>
      <div className="contact__form__div">
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            aria-label="name"
            className="contact__form__input"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <br />
          <input
            aria-label="email"
            className="contact__form__input"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <br />
          <textarea
            aria-label="message"
            name="message"
            rows="4"
            cols="50"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Write a message"
            required
          />
          <input
            className="contact__form__button"
            type="submit"
            value="Submit"
          />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Contact;
