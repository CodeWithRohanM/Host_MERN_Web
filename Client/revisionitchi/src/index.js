import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//USING REDUX
import { Provider } from "react-redux";
import store from "./Store";


const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
