import { Link } from "react-router-dom";
import "../../styles/components/ConfirmSignedOut.css";

export default function ConfirmSignedOut({ message, link }) {
  return (
    <div className="overlayer">
      <h1>{message}</h1>
      <Link to={link}>Close</Link>
    </div>
  );
}
