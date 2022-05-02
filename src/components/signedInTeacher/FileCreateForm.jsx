import InputField from "../InputField";
import data from "../../data/inputFields.json";
import { useState } from "react";
import { editDocument } from "../../scripts/firebase/fireStore";
import { addDocumentWithNoId } from "../../scripts/firebase/fireStore";
import useUserProvider from "../../store/useUserProvider";
import ConfirmSignedIn from "./ConfirmSignedIn";
import FileInput from "../FileInput";
import { uploadFile } from "../../scripts/firebase/cloudStorage";
import Select from "./Select";

export default function FileCreateForm({ id, type, action }) {
  const { addActivity } = useUserProvider();
  const [name, setName] = useState();
  const [file, setFile] = useState();
  const [section, setSection] = useState();
  const [status, setStatus] = useState(null);
  const check = (item) => item !== "";
  const info = data.linkCreateForm;
  const path = `courses/${id}/content`;
  let label = status === 0 ? "Loading" : "Create new activity";

  async function onCreate(event) {
    event.preventDefault();
    let url = null;
    let withUrl = null;
    if (!check(section) || !check(name)) return null;
    setStatus(0);
    const inputedData1 = { name, section, type, url };
    const result = await addDocumentWithNoId(path, inputedData1);
    if (result.data === "") {
      const filePath = `activity/${result.id}.png`;
      url = await uploadFile(file, filePath);
    }
    const inputedData2 = { name, section, type, url, id: result.id };
    if (url) {
      withUrl = await editDocument(path, result.id, inputedData2);
    }
    setStatus(2);
    if (withUrl === "") {
      setStatus(1);
      addActivity(inputedData2);
    }
  }

  if (status === 1)
    return <ConfirmSignedIn message={"created"} setShowModal={action} />;

  return (
    <div className="overlayer">
      <form onSubmit={onCreate}>
        <h3>To add a new {type}, please enter the information bellow</h3>
        <InputField setup={info.name} actions={[setName, check]} />
        <FileInput setter={setFile} label={type} />
        <Select setter={setSection} />
        <button type="submit">{label}</button>
        <button type="button" onClick={action}>
          Cancel
        </button>
      </form>
    </div>
  );
}
