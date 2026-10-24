import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesFile from "./routes/RoutesFile";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RoutesFile />
  </StrictMode>
);
