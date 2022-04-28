import { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../scripts/firebase/auth";
import { addDoc } from "../scripts/firebase/fireStore";
import useUserProvider from "../store/useUserProvider";
import InputField from "../components/InputField";
import inputData from "../data/inputFields.json";
import Modal from "../components/Modal";
import Overlayer from "../components/Overayer";

export default function SignUp() {
  const { uidHandler } = useUserProvider();
  const [childName, setChildName] = useState("");
  const [school, setSchool] = useState("");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const check = (item) => item !== "";
  const checkEmail = (item) => item.includes("@");
  const checkPassword = (item) => item.length >= 8;
  const info = inputData.signUp;
  const checkSpecific = !checkEmail(email) || !checkPassword(password);
  const checkEmpty = !check(childName) || !check(school) || !check(parentName);

  async function onSubmitHandler(event) {
    event.preventDefault();
    setStatus(0);
    let user = null;
    if (checkSpecific || checkEmpty) return null;
    const uid = await createUser(email, password);
    setStatus(null);
    if (uid) {
      uidHandler(uid);
      const inputedData = { childName, school, parentName, role: "student" };
      user = await addDoc("user", uid, inputedData);
    }
    setStatus(null);
    if (user === "") {
      setStatus(1);
    }
  }

  let label = status === 0 ? "Loading" : "Create account";
  if (status === 1)
    return (
      <Modal>
        <Overlayer />
      </Modal>
    );
  return (
    <div>
      <h2>Welcome to eEnglish!</h2>
      <h3>
        To get started, please type in all the information required bellow:
      </h3>
      <form onSubmit={onSubmitHandler}>
        <InputField setup={info.childName} actions={[setChildName, check]} />
        <InputField setup={info.school} actions={[setSchool, check]} />
        <InputField setup={info.parentName} actions={[setParentName, check]} />
        <InputField setup={info.email} actions={[setEmail, checkEmail]} />
        <InputField setup={info.pass} actions={[setPassword, checkPassword]} />
        <button>{label}</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
    </div>
  );
}
