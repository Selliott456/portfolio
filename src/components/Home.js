import React from "react";
import email from "../images/email.svg";
import github from "../images/github.svg";
import linkedIn from "../images/linkedin.svg";

function Home() {
  return (
    <header className="hero">
      <div className="hero__row">
        <div className="hero__name-geo">
          <h1 className="hero__name">Elliott Peck</h1>
          <p className="hero__location">London, Tokyo, Washington D.C.</p>
        </div>
      </div>
    </header>
  );
}

export default Home;
