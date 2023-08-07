import React from "react";
import Card from "./Card";

// Define workItems data here
const workItems = [
  {
    title: "Travel Journal",
    imageUrl: "images/Travel-Journal.png",
    description:
      "A travel journal app that saves your favorite travel memories. Add points of interest, photos and reviews!",
    linkUrl: "https://travel-journal.herokuapp.com/",
    githubUrl: "https://github.com/ckc2007/Travel-Journal",
  },
  {
    title: "Instrument Rent Calculator",
    imageUrl: "images/Instrument-Rent-Calculator.png",
    description:
      "A custom instrument rental calculator for Jan Hampton Violins.",
    linkUrl: "https://ckc2007.github.io/Instrument-Rent-Calculator/",
    githubUrl: "https://github.com/ckc2007/Instrument-Rent-Calculator",
  },
  {
    title: "README Generator",
    imageUrl: "images/README-Generator.png",
    description: "A command-line professional README generator application.",
    linkUrl: "https://github.com/ckc2007/README-Generator",
    githubUrl: "https://github.com/ckc2007/README-Generator",
  },
  {
    title: "DailyCalm",
    imageUrl: "images/DailyCalm.png",
    description: "Introducing DailyCalm, your personal self-care companion.",
    linkUrl: "https://daily-calm-2023-be74e09f75dd.herokuapp.com/",
    githubUrl: "https://github.com/ckc2007/DailyCalm",
  },
  {
    title: "Tech Blog",
    imageUrl: "images/The-Tech-Blob.png",
    description: "A CMS-style blog site with a sense of humor.",
    linkUrl: "https://the-tech-blob.herokuapp.com/",
    githubUrl: "https://github.com/ckc2007/Tech-Blog",
  },
  {
    title: "Employee Tracker",
    imageUrl: "images/Employee-Tracker.png",
    description:
      "A command-line application that manages a company (or starship's) employee database.",
    linkUrl: "https://github.com/ckc2007/Employee-Tracker",
    githubUrl: "https://github.com/ckc2007/Employee-Tracker",
  },
  {
    title: "Online Coding Quiz",
    imageUrl: "images/Coding-Quiz.png",
    description: "A timed quiz on JavaScript fundamentals.",
    linkUrl: "https://ckc2007.github.io/Test-Your-Code-Knowledge-Online-Quiz/",
    githubUrl:
      "https://github.com/ckc2007/Test-Your-Code-Knowledge-Online-Quiz",
  },
  {
    title: "The Book Was Better - Book Finder App",
    imageUrl: "images/The-Book-Was-Better.png",
    description:
      "Quickly and easily search for film adaptations of books I have read",
    linkUrl:
      "https://ckc2007.github.io/The-Book-Was-Better-Movie-Book-Finder-App/",
    githubUrl:
      "https://github.com/ckc2007/The-Book-Was-Better-Movie-Book-Finder-App",
  },
  // {
  //   title: "Weather Dashboard",
  //   imageUrl: "/images/Weather-Dashboard.png",
  //   description: "A weather dashboard that shows the 5 day forecast by city.",
  //   linkUrl: "https://github.com/ckc2007/Weather-Dashboard-5-Day-Forecast",
  // },
  // {
  //   title: "Workday Scheduler",
  //   imageUrl: "/images/Work-Day-Scheduler.png",
  //   description:
  //     "A calendar application that saves user input and changes its appearance based on the time of day.",
  //   linkUrl: "https://github.com/ckc2007/Workday-Scheduler",
  // },
  // {
  //   title: "Password Generator",
  //   imageUrl: "/images/Password-Generator.png",
  //   description:
  //     "A password generator that returns a randomized string based on user-defined parameters.",
  //   linkUrl: "https://github.com/ckc2007/Password-Generator-App",
  //   githubUrl: "https://github.com/ckc2007/Password-Generator-App",
  // },
  // {
  //   title: "Code Wars",
  //   imageUrl: "/images/codewars section pic.png",
  //   description: "Practice kata",
  //   linkUrl: "https://www.codewars.com/users/ckc2007",
  //   githubUrl: "https://www.codewars.com/users/ckc2007",
  // },
  // {
  //   title: "Code Signal",
  //   imageUrl: "/images/codesignal section pic.png",
  //   description: "Coding challenges and training",
  //   linkUrl: "https://app.codesignal.com/profile/christoph_jqs",
  //   githubUrl: "https://app.codesignal.com/profile/christoph_jqs",
  // },
  // {
  //   title: "Mimo App",
  //   imageUrl: "/images/mimo web.png",
  //   description: "Certifications in web development, Python and SQL",
  //   linkUrl: "https://mimo.org/",
  //   githubUrl: "https://mimo.org/",
  // },
];

function Work() {
  return (
    <section id="work" className="work">
      <h2>Coding Work</h2>
      <div className="centered">
        <div className="container">
          <div id="main-work" className="card card--full">
            {/* The main work item */}
            <h3>{workItems[0].title}</h3>
            <a
              href={workItems[0].linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="biggest-image"
                src={workItems[0].imageUrl}
                alt={workItems[0].title}
              />
            </a>
            <p>{workItems[0].description}</p>
            {workItems[0].githubUrl && (
              <div>
                <a
                  href={workItems[0].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub
                </a>
              </div>
            )}
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
                githubUrl={item.githubUrl} // Add the githubUrl prop for the "GitHub" link
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
