import { Link, renderMatches } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1>
        404 Error
        <br />
        Page Not Found
      </h1>
      <Link to="/home">Back to Home</Link>
    </div>
  );
}
