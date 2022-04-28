import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserProvider from "./store/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
