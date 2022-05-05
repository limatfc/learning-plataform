import useUserProvider from "../../store/useUserProvider";
import NavBarLogOut from "./NavBarLogOut";
import NavBarLogIn from "./NavBarLogIn";

export default function NavigationBar() {
  const { uid } = useUserProvider();

  return (
    <div>
      {!uid && <NavBarLogOut />}
      {uid && <NavBarLogIn />}
    </div>
  );
}
