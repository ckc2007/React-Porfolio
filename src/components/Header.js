import React from "react";
// import any necessary files from ../images/filename;

function Header() {
  return (
    <header>
      <div>
        <h1 class="display-inline">
          Chris <span id="chorney">Chorney</span>
        </h1>
        <img
          class="display-inline"
          src="./assets/images/chorney bio pic.jpeg"
          alt="chris chorney in an aloha shirt with his cello by a fountain"
        />
        <p id="tagline">Music. Photography. Web Design.</p>
      </div>
      <nav>
        <ul>
          <li class="display-inline">
            <a href="#about-me">About Me</a>
          </li>
          <li class="display-inline">
            <a href="#work">Work</a>
          </li>
          <li class="display-inline">
            <a href="#resume">Resume</a>
          </li>
          <li class="display-inline">
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
