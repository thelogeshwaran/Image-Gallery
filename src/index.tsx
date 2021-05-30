import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./Context/ThemeContext";
import { UserProvider } from "./Context/UserContext";
import { PrivacyProvider } from "./Context/PrivacyContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <PrivacyProvider>
          <App />
        </PrivacyProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
