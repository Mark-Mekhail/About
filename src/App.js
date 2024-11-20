import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      {/* <Experience /> */}
      <Footer />
    </div>
  );
};

export default App;
