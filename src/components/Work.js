import React from "react";
import Card from "./Card";

function Work() {
  // Define workItems data here
  const workItems = [
    {
      title: "Hawaii Classic Duo",
      imageUrl: "./assets/images/hawaii classic section low res pic.png",
      description: "Music performance",
      linkUrl: "https://www.hawaiiclassicduo.com",
    },
    {
      title: "Code Wars",
      imageUrl: "./assets/images/codewars section pic.png",
      description: "Practice kata",
      linkUrl: "https://www.codewars.com/users/ckc2007",
    },
    // Add other work items here
  ];

  return (
    <section id="work" className="work">
      <h2>Work</h2>
      <div className="centered">
        <div className="container">
          <div id="main-work" className="card card--full">
            {/* The main work item */}
            <h3>{workItems[0].title}</h3>
            <a href={workItems[0].linkUrl}>
              <img
                id="biggest-image"
                src={workItems[0].imageUrl}
                alt={workItems[0].title}
              />
            </a>
            <p>{workItems[0].description}</p>
          </div>
          <div className="card-container">
            {/* Map through the rest of the work items and use the Card component */}
            {workItems.slice(1).map((item, index) => (
              <Card
                key={index}
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
                linkUrl={item.linkUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
