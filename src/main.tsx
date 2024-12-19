import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";
import App from "./App";

// Встановлюємо кореневий елемент для react-modal
ReactModal.setAppElement("#app");

// Отримуємо DOM-елемент
const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Target container 'app' is not found in the DOM.");
}

// Створюємо кореневий вузол і рендеримо додаток
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
