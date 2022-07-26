import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi there!</h1>
        <h1>
          This is the <b>"Home"</b> Page!
        </h1>
        <p>First time?</p>
        <p>Here's some links</p>
        <Link to="/home">Home</Link>
        <Link to="/PageNotFound">404 page</Link>
      </header>

      {/* <Route path="/home" exact render={(props) => <Home />} /> */}
    </div>
  );
}
