// dependencies
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import Modal from "react-modal";

// css
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";

// components
import App from "./App.tsx";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
