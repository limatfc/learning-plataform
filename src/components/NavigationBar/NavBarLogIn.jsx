import { removeItem } from "../../scripts/localStorage/localStorage";
import useUserProvider from "../../store/useUserProvider";
import calendar from "../../assets/icons/calendar.png";
import home from "../../assets/icons/home.png";
import logout from "../../assets/icons/logout.png";
import slack from "../../assets/icons/slack.png";
import zoom from "../../assets/icons/zoom.png";
import book from "../../assets/icons/book.png";
import { useNavigate, Link } from "react-router-dom";
import navigationHandler from "../../scripts/logic/navigation-handler";

export default function NavBarLogIn() {
  const navigate = useNavigate();
  const { user, uidHandler } = useUserProvider();
  const calendarLink = "https://calendar.google.com/calendar/u/0/r";

  function onLogOut() {
    removeItem();
    uidHandler(null);
    navigate("/");
  }

  return (
    <nav className="nav-login">
      <h2>eEnglish</h2>
      <Link to={navigationHandler(user)}>
        <img src={home} alt="a house icon" />
      </Link>
      <a href="https://www.zoom.us/" target="_blank" rel="noreferrer">
        <img src={zoom} alt="the zoom icon" />
      </a>
      <a href={calendarLink} target="_blank" rel="noreferrer">
        <img src={calendar} alt="a calendar icon" />
      </a>
      <a href="https://slack.com/intl/pt-br/" target="_blank" rel="noreferrer">
        <img src={slack} alt="the slack icon" />
      </a>
      <button onClick={onLogOut}>
        <img src={logout} alt="the logout icon" />
      </button>
    </nav>
  );
}
