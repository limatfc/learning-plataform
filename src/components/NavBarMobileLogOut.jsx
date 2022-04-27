import { Link } from "react-router-dom";
import menu from "../assets/icons/menu.png";

export default function NavBarMobileLogOut() {
  return (
    <nav>
      <img src={menu} alt="three parallel horizontal lines" />
      <h2> eEnglish</h2>
      <Link to="/login">Login</Link>
    </nav>
  );
}
