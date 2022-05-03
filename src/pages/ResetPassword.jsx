import { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmSignedOut from "../components/signedOut/ConfirmSignedOut";
import InputField from "../components/InputField";
import Modal from "../components/Modal";
import inputData from "../data/inputFields.json";
import { recoverUser } from "../scripts/firebase/auth";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const checkEmail = (item) => item.includes("@");
  const confirmationMessage = `We have sent an email to ${email}. Please, follow the instructions there. Don't forget to check your spam folder if needed.`;
  const info = inputData.resetPassword;

  async function onRecover(event) {
    event.preventDefault();
    if (!checkEmail(email)) return null;

    setStatus(0);
    const functionStatus = await recoverUser(email);
    setStatus(functionStatus);
  }

  let label = status === 0 ? "Loading" : "Reset password";
  return (
    <div>
      <h2>Having problems with your password?</h2>
      <h3>
        To redefine your password, please type in all the information required
        bellow:
      </h3>
      <form onSubmit={onRecover}>
        <InputField setup={info.email} actions={[setEmail, checkEmail]} />
        <button>{label}</button>
      </form>
      <p>Remembered your password?</p>
      <Link to="/login">Login</Link>
      <p>Don't have an account yet?</p>
      <Link to="/sign-up">Create account</Link>
      {status === 1 && (
        <Modal>
          <ConfirmSignedOut message={confirmationMessage} link="/login" />
        </Modal>
      )}
    </div>
  );
}
