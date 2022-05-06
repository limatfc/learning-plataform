import { Link } from "react-router-dom";

export default function NavBarLogOut() {
  return (
    <nav className="nav-logout">
      <h2>eEnglish</h2>
      <div className="grow"></div>
      <Link className=" button-sec" to="/">
        Home
      </Link>
      <Link className=" button-pri" to="/login">
        Login
      </Link>
    </nav>
  );
}
