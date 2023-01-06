import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Card } from "./card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className=" bg-fuchsia-400">
      <App />
    </div>
  </React.StrictMode>
);
