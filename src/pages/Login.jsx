import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import data from "../data/inputFields.json";
import useUserProvider from "../store/useUserProvider";

export default function Login() {
  const { confirmationMessage } = useUserProvider;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const checkEmail = (item) => item.includes("@");
  const checkPassword = (item) => item.length >= 8;
  const info = data.login;

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(email, password);
  }

  return (
    <div>
      <p>{confirmationMessage}</p>
      <h2>You are only a few clicks away from all the fun!</h2>
      <h3>Login into your account:</h3>
      <form onSubmit={onSubmitHandler}>
        <InputField setup={info.email} actions={[setEmail, checkEmail]} />
        <InputField setup={info.pass} actions={[setPassword, checkPassword]} />
        <button>Sign in</button>
        <p>Forgot your password?</p>
        <Link to="/reset-password">Redefine password</Link>
        <p>Don't have an account yet?</p>
        <Link to="/sign-up">Create account</Link>
      </form>
    </div>
  );
}
