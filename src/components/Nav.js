import React from "react";

function Nav() {
  return (
    <nav>
      <ul>
        <li className="display-inline">
          <a href="#about-me">About Me</a>
        </li>
        <li className="display-inline">
          <a href="#work">Work</a>
        </li>
        <li className="display-inline">
          <a href="#resume">Resume</a>
        </li>
        <li className="display-inline">
          <a href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
