import { Link } from "react-router-dom";
import LoginForm from "../components/signedOut/LoginForm";

export default function Login() {
  return (
    <div className="login">
      <h2>You are only a few clicks away from all the fun!</h2>
      <h3>To start, login into your account:</h3>
      <LoginForm />
      <p>Forgot your password?</p>
      <Link className="sec label" to="/reset-password">
        Redefine password
      </Link>
      <p className="last">Don't have an account yet?</p>
      <Link className="sec label" to="/sign-up">
        Create account
      </Link>
    </div>
  );
}
