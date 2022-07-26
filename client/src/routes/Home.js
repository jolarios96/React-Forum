import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>
        Hi there!
        <br />
        You found the <b>"Home"</b> Page!
      </h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li> Here's some links:</li>
        <li>
          {" "}
          <Link to="/home">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/page-not-found">404 page</Link>
        </li>
      </ul>
    </div>
  );
}
