import React, { useRef } from "react";
import "./contactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendMail = (e) => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-elements">
          <h2>
            Contact Me! <i className="fas fa-smile"></i>{" "}
          </h2>
          <form ref={form} autoComplete="off" action="" onSubmit={sendMail}>
            <div className="top-two-elements">
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
            </div>
            <span
              id="subject-entry"
              style={{ padding: "0.5rem" }}
              className="entry-container"
            >
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
            <span style={{ padding: "0.5rem" }} className="entry-container">
              <p>Message</p>
              <textarea
                name="message"
                required
                placeholder="Message..."
                cols="30"
                rows="10"
              ></textarea>
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
