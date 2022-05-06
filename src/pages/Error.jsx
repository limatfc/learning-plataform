import { Link } from "react-router-dom";
import error from "../assets/images/error.png";

export default function Error() {
  return (
    <div className="error">
      <h2>
        Ops, it looks like the page you are trying to access is not available at
        the moment.
      </h2>
      <h2>We are already working on it. Please try again later</h2>
      <img src={error} alt="a computer with an error symbol " />
      <Link className="pri" to="/">
        Go back to the home page
      </Link>
      ;
    </div>
  );
}
