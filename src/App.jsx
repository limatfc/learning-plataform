import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SignedInTeacher from "./routes/SignedInTeacher";
import SignedInStudent from "./routes/SignedInStudent";
import SignedOut from "./routes/SignedOut";
import useUserProvider from "./store/useUserProvider";
import "./styles/styles.css";

export default function App() {
  const { uid, user } = useUserProvider();

  return (
    <BrowserRouter>
      <NavigationBar />
      {!uid && <SignedOut />}
      {uid && user?.role === "teacher" && <SignedInTeacher />}
      {uid && user?.role === "student" && <SignedInStudent />}
    </BrowserRouter>
  );
}
