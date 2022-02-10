import React, { useRef, useState } from "react";
import "./contactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [messageLength, setMessageLength] = useState(0);
  const validMessage = messageLength < 300 ? true : false;
  const messageLen = (e) => {
    setMessageLength(e.target.value.length);
  };
  //   const [messageLength, setMessage] = useState(message.length);

  const sendMail = (e) => {
    if (validMessage) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_ycetuhp",
          "template_vvju7hr",
          form.current,
          "user_owYDR8Wm2vdDSHNhJn0so"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Your message has been sent! Thank You for reaching out.");
            window.location.reload();
          },
          (error) => {
            console.log(error.text);
            alert(
              "Something went wrong, the message was not sent. Please try again in a moment!"
            );
          }
        );
    } else {
      alert("Message is too long! Kindly summarize it within the limit!");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-elements">
          <h2>
            Contact Me! <i className="fas fa-smile"></i>{" "}
          </h2>
          <form ref={form} autoComplete="off" action="" onSubmit={sendMail}>
            <span className="entry-container">
              <p>Full Name</p>
              <input
                type="text"
                autoComplete="off"
                name="name"
                placeholder="John Smith"
                required
              />
            </span>
            <span className="entry-container">
              <p>Email</p>
              <input
                type="text"
                name="name"
                placeholder="example@gmail.com"
                required
                autoComplete="off"
              />
            </span>
            <span id="subject-entry" className="entry-container">
              <p>Subject</p>
              <input
                type="text"
                name="subject"
                style={{ width: "100%" }}
                placeholder={"I have a huge crush on you..."}
                required
              />
            </span>
            <br />
            <span className="entry-container">
              <p>Message</p>
              <textarea
                onChange={messageLen}
                name="message"
                required
                id="message"
                placeholder="Message..."
                cols="30"
                rows="10"
              ></textarea>
              <h4 className={messageLength >= 300 ? "danger" : "safe"}>
                {messageLength} / 300{" "}
              </h4>
            </span>
            <br />
            <input id="submit" type="submit" value="SUBMIT!" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
