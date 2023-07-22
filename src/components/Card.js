import React from "react";

function Card(props) {
  const { title, imageUrl, description, linkUrl, linkText, githubUrl } = props;

  return (
    <div className="card">
      <h3>{title}</h3>
      <a href={linkUrl}>
        <img src={imageUrl} alt={title} />
      </a>
      <p>{description}</p>
      {githubUrl && (
        <div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub
          </a>
        </div>
      )}
    </div>
  );
}

export default Card;
