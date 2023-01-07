import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//USING REDUX
import { Provider } from "react-redux";
import Store from "./Store";

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
