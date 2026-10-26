import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesFile from "./routes/RoutesFile";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RoutesFile />
    </AuthContextProvider>
  </StrictMode>,
);
