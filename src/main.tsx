import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Portfolio Starter</h1>
      <p>Clean slate ready. We will build each piece step by step.</p>
    </div>
  </StrictMode>
);
