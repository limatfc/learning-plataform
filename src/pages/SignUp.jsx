import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import inputData from "../data/inputFields.json";

export default function SignUp() {
  const [childName, setChildName] = useState("");
  const [school, setSchool] = useState("");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const check = (item) => item !== "";
  const checkEmail = (item) => item.includes("@");
  const checkPassword = (item) => item.length >= 8;

  const info = inputData.signUp;

  return (
    <div>
      <h2>Welcome to eEnglish!</h2>
      <h3>
        To get started, please type in all the information required bellow:
      </h3>
      <form>
        <InputField setup={info.childName} actions={[setChildName, check]} />
        <InputField setup={info.school} actions={[setSchool, check]} />
        <InputField setup={info.parentName} actions={[setParentName, check]} />
        <InputField setup={info.email} actions={[setEmail, checkEmail]} />
        <InputField setup={info.pass} actions={[setPassword, checkPassword]} />
        <button>Create account</button>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}
