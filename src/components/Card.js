import React from "react";

function Card(props) {
  const { title, imageUrl, description, linkUrl, linkText } = props;

  return (
    <div className="card">
      <h3>{title}</h3>
      <a href={linkUrl}>
        <img src={imageUrl} alt={title} />
      </a>
      <p>{description}</p>
    </div>
  );
}

export default Card;
