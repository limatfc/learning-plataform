import { Link } from "react-router-dom";

export default function NavBarLogOut() {
  return (
    <nav className="mobile-logout">
      <h2>eEnglish</h2>
      <div className="grow"></div>
      <Link className=" button-secundary" to="/">
        Home
      </Link>
      <Link className=" button-primary" to="/login">
        Login
      </Link>
    </nav>
  );
}
