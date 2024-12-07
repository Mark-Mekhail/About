import React, { useRef } from "react";

// Styles
import styles from "./styles/App.module.css";

// Required components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// Constants
import { navSections } from "./constants/content";

/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered App component.
 */
export default function App() {
  const navSectionRefs = navSections.reduce((acc, section) => {
    acc[section] = useRef(null);
    return acc;
  }, {});

  return (
    <div className={styles.app}>
      <Header navSectionRefs={navSectionRefs} />
      <Body navSectionRefs={navSectionRefs} />
      <Footer />
    </div>
  );
};
