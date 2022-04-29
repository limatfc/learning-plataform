import calendar from "../assets/icons/calendar.png";
import home from "../assets/icons/home.png";
import logout from "../assets/icons/logout.png";
import slack from "../assets/icons/slack.png";
import zoom from "../assets/icons/zoom.png";
import book from "../assets/icons/book.png";

export default function NavBarDesktopLogIn() {
  return (
    <nav>
      <img src={home} alt="a house icon" />
      <img src={book} alt="a book icon" />
      <img src={zoom} alt="the zoom icon" />
      <img src={calendar} alt="a calendar icon" />
      <img src={slack} alt="the slack icon" />
      <img src={logout} alt="the logout icon" />
    </nav>
  );
}
