import React from "react";

// Required components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered App component.
 */
export default function App() {
  return (
    <div id="react-app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
