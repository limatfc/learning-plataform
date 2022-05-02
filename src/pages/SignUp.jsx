import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import ConfirmSignedOut from "../components/signedOut/ConfirmSignedOut";
import SignUpForm from "../components/signedOut/SignUpForm";

export default function SignUp() {
  const [status, setStatus] = useState(null);
  const success = "YAY, user created successfully!";

  let label = status === 0 ? "Loading" : "Create account";

  return (
    <div>
      <h2>Welcome to eEnglish!</h2>
      <h3>
        To get started, please type in all the information required bellow:
      </h3>
      <SignUpForm actions={{ setStatus }} label={label} />
      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
      {status === 1 && (
        <Modal>
          <ConfirmSignedOut message={success} link="/login" />
        </Modal>
      )}
    </div>
  );
}
