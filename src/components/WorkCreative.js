import React from "react";
import Card from "./Card";

// Define workItems data here
const workItems = [
  {
    title: "Hawaii Classic Duo",
    imageUrl: "/images/hawaii classic section low res pic.png",
    description: "Music performance",
    linkUrl: "https://www.hawaiiclassicduo.com",
  },
  {
    title: "Code Wars",
    imageUrl: "/images/codewars section pic.png",
    description: "Practice kata",
    linkUrl: "https://www.codewars.com/users/ckc2007",
  },
  {
    title: "Code Signal",
    imageUrl: "/images/codesignal section pic.png",
    description: "Coding challenges and training",
    linkUrl: "https://app.codesignal.com/profile/christoph_jqs",
  },
  {
    title: "Mimo App",
    imageUrl: "/images/mimo web.png",
    description: "Certifications in web development, Python and SQL",
    linkUrl: "https://mimo.org/",
  },
  {
    title: "Slow Drip",
    imageUrl: "/images/slow drip section pic.jpeg",
    description: "Ambisonic music production",
    linkUrl:
      "https://www.youtube.com/channel/UCJeoEVYLCI3uuPaWMMaw_Kg/playlists",
  },
  {
    title: "Analog Rock Machine Studio",
    imageUrl: "/images/arms section pic.jpeg",
    description: "Music recording studio and record label",
    linkUrl: "https://analogrockmachinestudio.com/",
  },
  {
    title: "Objkt - Nature photography",
    imageUrl: "/images/objkt.jpeg",
    description: "Web3 - Tezos blockchain photography",
    linkUrl:
      "https://objkt.com/collection/KT1SdEkvQyFyvpEhFtp3kMNGz6hjU7WYodhJ",
  },
  {
    title: "Music Production",
    imageUrl: "/images/music img.jpeg",
    description: "Albums I have produced",
    linkUrl: "https://analogrockmachinestudio.com/bands",
  },
];

function WorkCreative() {
  return (
    <section id="creative" className="work">
      <h2>Creative Work</h2>
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

export default WorkCreative;
