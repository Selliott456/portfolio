import React from "react";
import email from "../images/email.svg";
import github from "../images/github.svg";
import linkedIn from "../images/linkedin.svg";

function Contact({ background }) {
  return (
    <div
      className="about-box about-box--contact about-box--contact-sticky"
      role="region"
      aria-label="Contact"
      style={background ? { background } : undefined}
    >
      <a
        href="https://github.com/Selliott456"
        className="about-box__link"
        aria-label="GitHub"
      >
        <img alt="" src={github} />
      </a>
      <a
        href="mailto:elliottpeck12@gmail.com"
        className="about-box__link"
        aria-label="Email"
      >
        <img alt="" src={email} />
      </a>
      <a
        href="https://www.linkedin.com/in/elliott-peck-b41b6b15a/"
        className="about-box__link"
        aria-label="LinkedIn"
      >
        <img alt="" src={linkedIn} />
      </a>
    </div>
  );
}

export default Contact;
