import { Link } from "react-router-dom";

export default function ConfirmSignedOut({ message, link }) {
  return (
    <div>
      <div className="backdrop"></div>
      <div className="overlayer">
        <h3>{message}</h3>
        <Link className="sec label" to={link}>
          Close
        </Link>
      </div>
    </div>
  );
}
