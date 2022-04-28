import { Link } from "react-router-dom";
import "../styles/components/Overlayer.css";

export default function Overlayer() {
  return (
    <div className="overlayer">
      <h1>YAY, user created.</h1>
      <Link to="/login">Close</Link>
    </div>
  );
}
