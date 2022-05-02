import { readDocument } from "../firebase/fireStore";
import navigationHandler from "./navigation-handler";

export async function readDoc(uidHandler, uid, setStatus) {
  let user = null;
  uidHandler(uid);
  user = await readDocument("user", uid);
  setStatus(1);
  return user;
}

export async function saveUser(userHandler, user, navigate) {
  userHandler(user);
  const link = navigationHandler(user);
  navigate(link);
}
