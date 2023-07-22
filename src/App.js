import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("About Me");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Pass onTabChange function to Header */}
      <Header onTabChange={handleTabChange} /> 
      <Main activeTab={activeTab} />
      <Footer />
    </div>
  );
}

export default App;
