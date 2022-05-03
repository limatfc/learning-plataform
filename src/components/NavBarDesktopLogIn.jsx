import { removeItem } from "../scripts/localStorage/localStorage";
import calendar from "../assets/icons/calendar.png";
import home from "../assets/icons/home.png";
import logout from "../assets/icons/logout.png";
import slack from "../assets/icons/slack.png";
import zoom from "../assets/icons/zoom.png";
import book from "../assets/icons/book.png";
import { useNavigate } from "react-router-dom";

export default function NavBarDesktopLogIn() {
  const navigate = useNavigate();

  function onLogOut() {
    removeItem();
    navigate("/");
  }

  return (
    <nav>
      <img src={home} alt="a house icon" />
      <img src={book} alt="a book icon" />
      <img src={zoom} alt="the zoom icon" />
      <img src={calendar} alt="a calendar icon" />
      <img src={slack} alt="the slack icon" />
      <button onClick={onLogOut}>
        <img src={logout} alt="the logout icon" />
      </button>
    </nav>
  );
}
