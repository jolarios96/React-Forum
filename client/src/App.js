import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
// import Home from "./routes/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi there!</h1>
        <p>First time?</p>
        <p>Here's some links</p>
        <Link to="/home">Home</Link>
      </header>

      {/* <Route path="/home" exact render={(props) => <Home />} /> */}
    </div>
  );
}

export default App;
