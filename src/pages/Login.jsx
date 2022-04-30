import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import data from "../data/inputFields.json";
import { loginUser } from "../scripts/firebase/auth";
import { readDocument } from "../scripts/firebase/fireStore";
import useUserProvider from "../store/useUserProvider";
import navigationHandler from "../scripts/logic/navigation-handler";

export default function Login() {
  const { uidHandler, userHandler } = useUserProvider();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const checkEmail = (item) => item.includes("@");
  const checkPassword = (item) => item.length >= 8;
  const info = data.login;

  async function onLogin(event) {
    event.preventDefault();
    if (!checkEmail(email) || !checkPassword(password)) return null;
    let user = null;
    setStatus(0);
    const uid = await loginUser(email, password);
    if (uid) {
      uidHandler(uid);
      user = await readDocument("user", uid);
      setStatus(1);
    }
    setStatus(2);
    userHandler(user);
    const link = navigationHandler(user);
    navigate(link);
  }
  const label = status === 0 ? "Loading" : "Sign in";
  return (
    <div>
      <h2>You are only a few clicks away from all the fun!</h2>
      <h3>Login into your account:</h3>
      <form onSubmit={onLogin}>
        <InputField setup={info.email} actions={[setEmail, checkEmail]} />
        <InputField setup={info.pass} actions={[setPassword, checkPassword]} />
        <button>{label}</button>
        <p>Forgot your password?</p>
        <Link to="/reset-password">Redefine password</Link>
        <p>Don't have an account yet?</p>
        <Link to="/sign-up">Create account</Link>
      </form>
    </div>
  );
}
