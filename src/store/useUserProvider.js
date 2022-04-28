import { useContext } from "react";
import userContext from "./user-context";

export default function useUserProvider() {
  const context = useContext(userContext);

  return context;
}
