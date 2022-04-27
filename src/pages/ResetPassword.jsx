import { useState } from "react";
import InputField from "../components/InputField";
import inputData from "../data/inputFields.json";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const check = (item) => item !== "";

  const info = inputData.resetPassword;

  return (
    <div>
      <h2>Having problems with your password?</h2>
      <h3>
        To redefine your password, please type in all the information required
        bellow:
      </h3>
      <form>
        <InputField setup={info.email} actions={[setEmail, check]} />
        <button>Reset password</button>
      </form>
    </div>
  );
}
