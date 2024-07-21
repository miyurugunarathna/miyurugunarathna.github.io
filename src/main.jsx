import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Home from "@/pages/home";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Home />
    </StrictMode>
  );
}
