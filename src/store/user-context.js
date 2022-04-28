import { createContext } from "react";

const userContext = createContext({
  uid: "",
  user: {},
});

export default userContext;
