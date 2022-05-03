import useUserProvider from "../../store/useUserProvider";
import NavBarMobileLogOut from "./NavBarMobileLogOut";
import NavBarDesktopLogIn from "./NavBarDesktopLogIn";

export default function NavigationBar() {
  const { uid } = useUserProvider();

  return (
    <div>
      {!uid && <NavBarMobileLogOut />}
      {uid && <NavBarDesktopLogIn />}
    </div>
  );
}
