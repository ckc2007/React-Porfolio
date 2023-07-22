import React from "react";

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <h2>About Me</h2>
      <img
        className="display-inline"
        src="/images/chorney bio pic.jpeg"
        alt="chris chorney in an aloha shirt with his cello by a fountain"
        width="200"
        height="200"
      />

      <p>
        Christopher Chorney is a cello player and multi-instrumentalist hailing
        from Honolulu, Hawaii who has played numerous Grammy-Award Winning
        tracks. He is the owner of Analog Rock Machine Studio and has produced
        albums for a diverse array of musicians. His interests include
        three-dimensional audio, web3, digital artwork, and full-stack web
        development. He currently resides in Richmond Virginia.
      </p>
    </section>
  );
}

export default AboutMe;
