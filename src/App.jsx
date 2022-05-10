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
      {/* Very, very clean. You see good code is pleasant to see/read */}
      {/* Joking aside this is a very nice impression for a recruiter that does not know you */}

      {/* Only detail: Put the true statmeents first and then the false statment */}
      {/* In other words, put the SignedOut last.  */}
      {!uid && <SignedOut />}
      {uid && user?.role === "teacher" && <SignedInTeacher />}
      {uid && user?.role === "student" && <SignedInStudent />}
    </BrowserRouter>
  );
}
