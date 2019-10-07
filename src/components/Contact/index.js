import React, { useState } from "react";
import "../Contact/Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = event => {
    const request = JSON.stringify({
      name: name, email: email, message: message
    });
    console.log(request);
    fetch("https://www.usebasin.com/f/c177f0920b56.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: `${request}`
    }).then(response => {
      if (response.ok) {
        console.log(!"response ok");
        alert("Your message was submitted successfully, David will be in contact with you soon.")
        setName("")
        setEmail("")
        setMessage("")
        event.preventDefault();
      }
      else{
        console.log("error!")
        alert("Something went wrong, try again later")
        event.preventDefault();
      }
    });
    event.preventDefault();
  };

  const isInvalid = name === "" || email === "" || message === "";
  return (
    <div className="contact">
      <form className="contact__form" onSubmit={handleSubmit}>
        <h4 className="contact__head">Contact</h4>
        <label style={{ display: "none" }}>Name:</label>
        <input
          className="contact__form__input"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        />
        <br />
        <label style={{ display: "none" }}>Email:</label>
        <input
          className="contact__form__input"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <label style={{ display: "none" }}>Message:</label>
        <textarea
          name="message"
          rows="4"
          cols="50"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Write a message"
        />
        <input
          className="contact__form__button"
          type="submit"
          value="Submit"
          disabled={isInvalid}
        />
        <br />
        {isInvalid ? (
          <span>*You have to fill in all fields to submit.</span>
        ) : (
          <br />
        )}
      </form>
    </div>
  );
};

export default Contact;
