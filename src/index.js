import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Create a root React element and render it to the DOM.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
