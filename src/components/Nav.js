import React, { useState } from "react";

function Nav({ onTabChange }) {
  const [activeTab, setActiveTab] = useState("About Me");

  const handleClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <nav>
      <ul>
        <li className="display-inline">
          <a
            href="#about-me"
            className={activeTab === "About Me" ? "active" : ""}
            onClick={() => handleClick("About Me")}
          >
            About Me
          </a>
        </li>
        <li className="display-inline">
          <a
            href="#work"
            className={activeTab === "Work" ? "active" : ""}
            onClick={() => handleClick("Work")}
          >
            Work
          </a>
        </li>
        <li className="display-inline">
          <a
            href="#creative"
            className={activeTab === "Work Creative" ? "active" : ""}
            onClick={() => handleClick("Work Creative")}
          >
            Creative
          </a>
        </li>
        <li className="display-inline">
          <a
            href="#resume"
            className={activeTab === "Resume" ? "active" : ""}
            onClick={() => handleClick("Resume")}
          >
            Resume
          </a>
        </li>
        <li className="display-inline">
          <a
            href="#contact-me"
            className={activeTab === "Contact" ? "active" : ""}
            onClick={() => handleClick("Contact")}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
