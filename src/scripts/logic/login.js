import { readDocument } from "../firebase/fireStore";
import navigationHandler from "./navigation-handler";
import { setLocalStorage } from "../localStorage/localStorage";

const localStorageKey = "userUID";
export async function readDoc(uidHandler, uid, setStatus) {
  let user = null;
  uidHandler(uid);
  user = await readDocument("user", uid);
  setStatus(1);
  return user;
}

export async function saveUser(userHandler, user) {
  userHandler(user);
  setLocalStorage(localStorageKey, user.id);
}

export async function navigateUser(user, navigate) {
  const link = navigationHandler(user);
  navigate(link);
}
