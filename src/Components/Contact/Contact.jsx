import React, { useRef } from "react";
import "./contacts.css";

//Emailjs

import emailjs from "emailjs-com";

// Icons
import { IoLogoLinkedin } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_l8oh3vb",
      "template_5vy8d3o",
      form.current,
      "rVtMPALQyaPG0hep6"
    );
    e.target.reset();
  };
  return (
    <section id="contact" className="contact section container">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <IoLogoLinkedin className="icon" />
              </div>
              <h4>Linkedin</h4>
              <span className="userName">Ketevan Gagua</span>
              <div>
                <a
                  href="https://www.linkedin.com/in/ketevan-gagua/"
                  className="flex"
                >
                  <FaLocationArrow className="icon" />
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <FaFacebookSquare className="icon" />
              </div>
              <h4>Facebook</h4>
              <span className="userName">Keti Gagua</span>
              <div>
                <a
                  href="https://www.facebook.com/qeti.gagua.7/"
                  className="flex"
                >
                  <FaLocationArrow className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form grid">
          <h3>Send me an email</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Enter your Name" name="name" />
            <input type="text" placeholder="Enter your Email" name="email" />
            <textarea placeholder="Enter you message"></textarea>
            <button className="formBtn" type="submit" name="submit">
              {" "}
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
