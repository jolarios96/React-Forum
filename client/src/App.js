import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
// import Home from "./routes/home";

function App() {
  return (
    <div className="App">
      <h1>Hi there!</h1>
      <p>First time?</p>
      <p>Go to our homepage:</p>
      <Link to="/home">Home</Link>

      {/* <Route path="/home" exact render={(props) => <Home />} /> */}
    </div>
  );
}

export default App;
