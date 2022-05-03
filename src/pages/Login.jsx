import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../scripts/firebase/auth";
import { saveUser } from "../scripts/logic/login";
import { readDoc } from "../scripts/logic/login";
import useUserProvider from "../store/useUserProvider";
import InputField from "../components/InputField";
import data from "../data/inputFields.json";

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
    setStatus(2);
    if (uid) user = await readDoc(uidHandler, uid, setStatus);
    user.id = uid;
    if (user) await saveUser(userHandler, user, navigate);
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
