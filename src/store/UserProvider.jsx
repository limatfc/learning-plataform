import { useEffect, useState } from "react";
import {
  setLocalStorage,
  getLocalStorage,
} from "../scripts/localStorage/localStorage";
import { readDoc } from "../scripts/firebase/fireStore";
import userContext from "./user-context";

const localStorageKey = "userUID";

export default function UserProvider({ children }) {
  const [uid, setUid] = useState();
  const [user, setUser] = useState();

  // useEffect(() => {
  //   async function loginUserFromLocalStorage() {
  //     const uid = getLocalStorage(localStorageKey);
  //     if (uid) {
  //       const userData = await readDoc("user", uid);
  //       if (userData) {
  //         setUser({uid,...userData });
  //       }
  //     }
  //   }

  //   loginUserFromLocalStorage();
  // }, []);

  useEffect(() => {
    if (uid) {
      setLocalStorage(localStorageKey, uid);
    }
  }, [uid]);

  useEffect(() => {
    async function onFirstLoad() {
      const parse = getLocalStorage(localStorageKey);
      if (parse) {
        setUid(parse);
      }
    }
    onFirstLoad();
  }, [uid]);

  useEffect(() => {
    async function loadUser() {
      if (uid) {
        const userData = await readDoc("user", uid);
        setUser(userData);
      }
    }
    loadUser();
  }, [uid]);

  function uidHandler(uid) {
    setUid(uid);
  }

  function userHandler(userInfo) {
    setUser(userInfo);
  }

  const value = {
    uid,
    user,
    uidHandler,
    userHandler,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
