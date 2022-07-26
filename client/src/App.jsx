import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hi there!</h1>
      <p>First time?</p>
      <p>Go to our homepage:</p>
      <Link to="/home">Home</Link>
    </div>
  );
}

export default App;
