import InputField from "./InputField";
import data from "../data/inputFields.json";
import { useState } from "react";
import { addDocumentWithNoId } from "../scripts/firebase/fireStore";
import useUserProvider from "../store/useUserProvider";
import CompleteMessage from "./CompleteMessage";

export default function LinkCreateForm({ id, type, action }) {
  const { addActivity } = useUserProvider();
  const [name, setName] = useState();
  const [url, setURL] = useState();
  const [section, setSection] = useState();
  const [status, setStatus] = useState(null);
  const check = (item) => item !== "";
  const info = data.linkCreateForm;
  const path = `courses/${id}/content`;
  let label = status === 0 ? "Loading" : "Create new activity";
  const options = info.section.map((item) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ));

  async function onCreate(event) {
    event.preventDefault();
    if (!check(section) || !check(url) || !check(name)) return null;
    setStatus(0);
    const inputedData1 = { name, url, section, type };
    const result = await addDocumentWithNoId(path, inputedData1);
    const inputedData2 = { name, url, section, type, id: result.id };
    setStatus(2);
    if (result.data === "") {
      setStatus(1);
      addActivity(inputedData2);
    }
  }

  if (status === 1)
    return <CompleteMessage message={"created"} setShowModal={action} />;

  return (
    <div className="overlayer">
      <form onSubmit={onCreate}>
        <h3>To add a new {type}, please enter the information bellow</h3>
        <InputField setup={info.name} actions={[setName, check]} />
        <InputField setup={info.url} actions={[setURL, check]} />
        <select onChange={(event) => setSection(event.target.value)}>
          {options}
        </select>
        <button type="submit">{label}</button>
        <button type="button" onClick={action}>
          Cancel
        </button>
      </form>
    </div>
  );
}