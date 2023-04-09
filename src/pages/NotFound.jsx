import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Oops Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, neque?
      </p>
      <Link to={`/`} className="navlink">
        Go back to Home page
      </Link>
    </div>
  );
}
