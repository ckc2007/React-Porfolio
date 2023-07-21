import React from "react";
import Nav from "./Nav";
// import any necessary files from ../images/filename;

function Header() {
  return (
    <header>
      <div>
        <h1 class="display-inline">
          Chris <span id="chorney">Chorney</span>
        </h1>
        <img
          className="display-inline"
          src="./assets/images/chorney bio pic.jpeg"
          alt="chris chorney in an aloha shirt with his cello by a fountain"
        />
        <p id="tagline">Music. Photography. Web Design.</p>
      </div>
      {/* import from Nav component */}
      <Nav />
    </header>
  );
}

export default Header;
