import React from "react";
import Intro from "./components/Intro";
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
        <About />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
