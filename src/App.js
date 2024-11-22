import React from "react";
import Intro from "./components/Intro";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="top-div">
      <Header />
      <div id="main-body">
        <Intro />
        <About />
        <Experience />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default App;
