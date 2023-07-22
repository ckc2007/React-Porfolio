import React from "react";
import Nav from "./Nav";

function Header({ onTabChange }) {
  return (
    <header>
      <div>
        <h1 className="display-inline">
          Chris <span id="chorney">Chorney</span>
        </h1>
        <img
          className="display-inline"
          src="/images/chorney bio pic.jpeg"
          alt="chris chorney in an aloha shirt with his cello by a fountain"
        />
        <p id="tagline">Music. Photography. Web Design.</p>
      </div>
      <Nav onTabChange={onTabChange} />
    </header>
  );
}

export default Header;
