// import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";

import "./index.css";
import "./App.css";

import reportWebVitals from "./reportWebVitals";

import Home from "./routes/Home";
import PageNotFound from "./routes/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <header className="App-header">
      {/* <div>Something</div> */}

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="page-not-found" element={<PageNotFound />} />
      </Routes>
    </header>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
