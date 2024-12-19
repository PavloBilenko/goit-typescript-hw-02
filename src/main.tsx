import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("app");

  if (!rootElement) {
    throw new Error("Target container 'app' is not found in the DOM.");
  }

  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

