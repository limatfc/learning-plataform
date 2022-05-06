import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../scripts/firebase/auth";
import { saveUser, navigateUser } from "../../scripts/logic/login";
import { readDoc } from "../../scripts/logic/login";
import useUserProvider from "../../store/useUserProvider";
import InputField from "../../components/InputField";
import data from "../../data/inputFields.json";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogin, setKeepLogin] = useState(false);
  const [status, setStatus] = useState(null);
  const { uidHandler, userHandler } = useUserProvider();
  const navigate = useNavigate();
  const checkEmail = (item) => item.includes("@");
  const checkPassword = (item) => item.length >= 8;
  const info = data.login;
  const label = status === 0 ? "Loading" : "Sign in";

  async function onLogin(event) {
    event.preventDefault();
    if (!checkEmail(email) || !checkPassword(password)) return null;
    let user = null;
    setStatus(0);
    const uid = await loginUser(email, password);
    setStatus(2);
    if (uid) user = await readDoc(uidHandler, uid, setStatus);
    if (user) {
      user.id = uid;
      if (keepLogin) saveUser(userHandler, user);
      await navigateUser(user, navigate);
    }
  }

  return (
    <form className="login-form" onSubmit={onLogin}>
      <InputField setup={info.email} actions={[setEmail, checkEmail]} />
      <InputField setup={info.pass} actions={[setPassword, checkPassword]} />
      <button className="primary">{label}</button>
      <label className="checkbox">
        <input type="checkbox" onChange={() => setKeepLogin(true)} />
        Keep me connected
      </label>
    </form>
  );
}
