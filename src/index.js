import React from "react";
import ReactDOM from "react-dom";
// #1. Import react-router functions 
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";


// #2. Change so router is coordinating what is displayed 
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
