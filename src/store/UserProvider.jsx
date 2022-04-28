import { useState } from "react";
import userContext from "./user-context";

export default function UserProvider({ children }) {
  const [uid, setUid] = useState(null);
  const [user, setUser] = useState([]);

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
