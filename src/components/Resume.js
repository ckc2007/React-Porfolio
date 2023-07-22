import React from "react";

function Resume() {
  return (
    // <!-- resume section here -->
    <section id="resume" className="resume">
      <h2>Resume</h2>
      {/* <!-- image of the pdf will show on click--> */}
      <ul>
        <a href="./assets/docs/cv.pdf" target="_blank">
          <li>CV</li>
        </a>
        <a href="./assets/docs/bio.pdf" target="_blank">
          <li>Bio</li>
        </a>
      </ul>
    </section>
  );
}

export default Resume;
