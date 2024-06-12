import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/app";
import "./assets/css/class.css";
import "./assets/css/styles.css";
 import "@clayui/css/lib/css/atlas.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
