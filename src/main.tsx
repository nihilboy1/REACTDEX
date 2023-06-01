import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { ContextProvider } from "./context/Context.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
