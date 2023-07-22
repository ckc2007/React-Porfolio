import React from "react";

import Header from "./Header";
import AboutMe from "./AboutMe";
import Work from "./Work";
import WorkCreative from "./WorkCreative";
import Resume from "./Resume";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function Main() {
  return (
    <main>
      <Header />
      <AboutMe />
      <Work />
      <WorkCreative />
      <Resume />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default Main;
