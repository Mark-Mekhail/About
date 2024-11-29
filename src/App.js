import React from "react";

// Required components
import Intro from "./components/Intro";
import Photos from "./components/Photos";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="top-div">
      <Header />
      <div className="main-body">
        <Intro />
        <Photos />
        <About />
        <Experience title="Internship Experience" />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
