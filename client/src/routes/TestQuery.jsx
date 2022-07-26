import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function TestQuery() {
  return (
    <div>
      <h1>
        Hi there!
        <br />
        You found the <b>"TestQuery"</b> Page!
      </h1>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>Test Create</li>
        <ul style={{}}>
          <li>button</li>
        </ul>
        <li>Test Read</li>
        <ul style={{}}>
          <li>button</li>
          <li>
            <Link to="">Get all users</Link>
          </li>
        </ul>
        <li>Test Update</li>
        <ul style={{}}>
          <li>button</li>
        </ul>
        <li>Test Delete</li>
        <ul style={{}}>
          <li>button</li>
        </ul>
      </ul>

      <Link to="/home">Back to Home</Link>
    </div>
  );
}
