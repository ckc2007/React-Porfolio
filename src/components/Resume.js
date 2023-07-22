import React from "react";

function Resume() {
  const handleDownload = (e, fileName) => {
    e.preventDefault();
    if (window.confirm(`Do you want to download the ${fileName}?`)) {
      const resumeUrl = process.env.PUBLIC_URL + `/docs/${fileName}.pdf`;
      // creates a new anchor <a> in the DOM
      const link = document.createElement("a");
      link.href = resumeUrl;
      // When you set thedownload attribute on an anchor (<a>`) element and provide a value, the browser will download the linked file with the filename you specified.
      link.setAttribute("download", `${fileName}.pdf`);
      //  programmatically triggers a click event on the anchor element. When the user clicks the link, the browser normally navigates to the URL specified in the href attribute of the anchor. However, when the download attribute is set, it changes the behavior, and the browser initiates a file download instead of navigating to the URL.
      // By using link.click();, we are simulating a click event on the anchor element. When this line is executed, it's as if the user clicked on the anchor link, and the browser will download the file associated with the href attribute. This technique is commonly used to trigger file downloads programmatically in JavaScript.
      link.click();
    }
  };

  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      {/* List of PDFs */}
      <ul>
        <li>
          <a
            href="/docs/cv.pdf"
            target="_blank"
            onClick={(e) => handleDownload(e, "cv")}
          >
            CV
          </a>
        </li>
        <li>
          <a
            href="/docs/bio.pdf"
            target="_blank"
            onClick={(e) => handleDownload(e, "bio")}
          >
            Bio
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Resume;
