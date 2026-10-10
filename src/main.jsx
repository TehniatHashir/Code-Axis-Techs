import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppLoader from "./components/AppLoader";
import TargetCursor from "./components/TargetCursor";
import TargetCursorAuto from "./components/TargetCursorAuto";
import "./index.css";

function Root() {
  const [loaded, setLoaded] = useState(false);

  return (
    <BrowserRouter>
      <TargetCursor
        spinDuration={2}
        hoverDuration={0.2}
        size={36}
        cornerSize={12}
        thickness={3}
        padding={6}
        dotSize={4}
        cursorColor="#1E4DB7"
        cursorColorOnTarget="#0B1F44"
        blendMode="normal"
        parallaxOn
        matchRadius
        showLabel
        clickEffect
        hideDefaultCursor
      />
      <TargetCursorAuto />

      <App />
      {!loaded && (
        <AppLoader onDone={() => setLoaded(true)} duration={6000} />
      )}
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);