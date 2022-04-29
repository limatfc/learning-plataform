import { Link } from "react-router-dom";
import "../styles/components/ConfirmationMessage.css";

export default function ConfirmationMessage({ message, link }) {
  return (
    <div className="overlayer">
      <h1>{message}</h1>
      <Link to={link}>Close</Link>
    </div>
  );
}
