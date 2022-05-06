import { useState } from "react";
import InputField from "../InputField";
import inputData from "../../data/inputFields.json";
import { createUser } from "../../scripts/firebase/auth";
import { addDocument } from "../../scripts/firebase/fireStore";

export default function SignUpForm({ actions, label }) {
  const { setStatus } = actions;
  const [childName, setChildName] = useState("");
  const [school, setSchool] = useState("");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const info = inputData.signUp;
  const check = (item) => item !== "";
  const checkEmail = (item) => item.includes("@");
  const checkPassword = (item) => item.length >= 8;
  const checkSpecific = !checkEmail(email) || !checkPassword(password);
  const checkEmpty = !check(childName) || !check(school) || !check(parentName);

  async function onSubmitHandler(event) {
    event.preventDefault();
    setStatus(0);
    let user = null;
    if (checkSpecific || checkEmpty) return null;

    const uid = await createUser(email, password);
    setStatus(2);
    if (uid) {
      const mainData = { childName, school, parentName };
      const extraData = { id: uid, role: "student" };
      const inputedData = { ...mainData, ...extraData };
      user = await addDocument("user", uid, inputedData);
    }
    setStatus(2);
    if (user === "") {
      setStatus(1);
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <InputField setup={info.childName} actions={[setChildName, check]} />
      <InputField setup={info.school} actions={[setSchool, check]} />
      <InputField setup={info.parentName} actions={[setParentName, check]} />
      <InputField setup={info.email} actions={[setEmail, checkEmail]} />
      <InputField setup={info.pass} actions={[setPassword, checkPassword]} />
      <button className="pri">{label}</button>
    </form>
  );
}
