import React from "react";

import AboutMe from "./AboutMe";
import Work from "./Work";
import WorkCreative from "./WorkCreative";
import Resume from "./Resume";
import ContactForm from "./ContactForm";

function Main({ activeTab }) {
  return (
    <main>
      {activeTab === "About Me" && <AboutMe />}
      {activeTab === "Work" && <Work />}
      {activeTab === "Work Creative" && <WorkCreative />}
      {activeTab === "Resume" && <Resume />}
      {activeTab === "Contact" && <ContactForm />}
    </main>
  );
}

export default Main;
