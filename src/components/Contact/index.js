import React, { Component } from "react";
import "../Contact/Contact.scss";

const message = {
  name: "",
  email: "",
  message: ""
};

// let newMessage = [];

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { ...message };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    let newMessage = [];
    const { name, email, message } = this.state;
    newMessage.push(this.state.name, this.state.email, this.state.message);
    console.log(newMessage);
    alert("This was submitted: \n" + name + "\n" + email + "\n" + message);
    event.preventDefault();
  };
  render() {
    const { name, email, message } = this.state;
    const isInvalid = name === "" || email === "" || message === "";
    return (
      <div className="contact">
        <form className="contact__form" onSubmit={this.handleSubmit}>
          <h3 className="contact__head">Contact</h3>
          <label style={{ display: "none" }}>Name:</label>
          <input
            className="contact__form__input"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <br />
          <label style={{ display: "none" }}>Email:</label>
          <input
            className="contact__form__input"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <br />
          <label style={{ display: "none" }}>Message:</label>
          <textarea
            name="message"
            rows="4"
            cols="50"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Write a message"
          />
          <input type="submit" value="Submit" disabled={isInvalid} />
        </form>
      </div>
    );
  }
}

export default Contact;
