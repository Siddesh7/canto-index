import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./components/Home";
import HeroSection from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeroSection />
  </React.StrictMode>
);
