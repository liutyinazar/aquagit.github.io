import "./Contact.scss";
import contactlogo from "../assets/images/contactlogo.png";
// import owner from "../assets/images/owner.png";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    if (!name) {
      setNameError("Please enter your name");
      formIsValid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Please enter your email address");
      formIsValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      formIsValid = false;
    } else {
      setEmailError("");
    }

    if (!message) {
      setMessageError("Please enter a message");
      formIsValid = false;
    } else {
      setMessageError("");
    }

    if (formIsValid) {
      setMessage("");

      const sendForm = (name, message) => {
        const chatId = '689564995';
        const chatId2 = '637891746';
        const chatId3 = '623849739';
        const now = new Date()

        const TOKEN = '6262855390:AAGoB-87NKdSiOtV67BJcxSHfZ3XyODlvzY'
        const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n \nDate: ${now}`;
        const encodedText = encodeURIComponent(text);
        const chatIds = [chatId, chatId2, chatId3];

        for (let i = 0; i < chatIds.length; i++) {
          const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chatIds[i]}&text=${encodedText}`;
          fetch(url);
        }

      };
      sendForm(name, message, email);
      console.log("Form is valid");
    }
  };

  return (
    <div className="contact">
      <div className="border">
        <div className="contact_title">
          <h1>Contact Us</h1>
          <span></span>
          <p>Write to us and we will respond to you soon!</p>
        </div>
        <div className="contact_wrapper">
          <form onSubmit={handleSubmit} className="contact_form">
            <div className="forms">
              <input
                type="text"
                className={
                  nameError
                    ? "contact_input contact_input-error"
                    : "contact_input"
                }
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <div className="contact_error">{nameError}</div>}
            </div>
            <div className="forms">
              <input
                type="email"
                className={
                  emailError
                    ? "contact_input contact_input-error"
                    : "contact_input"
                }
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className="contact_error">{emailError}</div>}
            </div>
            <div className="forms">
              <textarea
                className={
                  messageError
                    ? "contact_input contact_input-error"
                    : "contact_input"
                }
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {messageError && (
                <div className="contact_error">{messageError}</div>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="contact-info">
            <div className="contact_background">
              <img src={contactlogo} alt="contactlogo" height={"500px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
