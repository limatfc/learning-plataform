import FileInput from "./FileInput";
import InputField from "./InputField";
import data from "../data/inputFields.json";
import { useState } from "react";
import { editDocument } from "../scripts/firebase/fireStore";
import { uploadFile } from "../scripts/firebase/cloudStorage";
import CompleteMessage from "./CompleteMessage";

export default function ActivityEditForm({ setup }) {
  const [item, path, setEditForm, editActivity] = setup;
  const [name, setName] = useState();
  const [inputedUrl, setURL] = useState(null);
  const [file, setFile] = useState();
  const [section, setSection] = useState();
  const [status, setStatus] = useState(null);
  const check = (item) => item !== "";
  const info = data.linkCreateForm;
  const filesType = item.type === "file" || item.type === "image";
  const linkType = item.type === "video" || item.type === "game";
  const options = info.section.map((item) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ));

  async function onEdit(event) {
    event.preventDefault();
    let newURL = "";
    setStatus(0);
    const inputedData = {
      name,
      url: inputedUrl,
      section,
      type: item.type,
      id: item.id,
    };
    const inputedData1 = {
      name,
      url: newURL,
      section,
      type: item.type,
      id: item.id,
    };
    if (inputedUrl) {
      const result = await editDocument(path, item.id, inputedData);
      if (result === "") {
        setStatus(1);
        editActivity(item.id, inputedData);
      }
    }
    if (!inputedUrl) {
      const filePath = `activity/${item.id}.png`;
      newURL = await uploadFile(file, filePath);
      if (newURL) {
        const result = await editDocument(path, item.id, inputedData1);
        if (result === "") {
          setStatus(1);
          editActivity(item.id, inputedData1);
        }
      }
    }
  }

  let label = "";
  status === 0 ? (label = "Loading") : (label = "Confirm changes");

  if (status === 1)
    return <CompleteMessage message={"edited"} setShowModal={setEditForm} />;

  return (
    <div className="overlayer">
      <h3>To add a new {item.type}, please enter the information bellow</h3>
      <form onSubmit={onEdit}>
        <InputField setup={info.name} actions={[setName, check]} />
        {linkType && <InputField setup={info.url} actions={[setURL, check]} />}
        {filesType && <FileInput setter={setFile} label={item.type} />}
        <select onChange={(event) => setSection(event.target.value)}>
          {options}
        </select>
        <button type="submit">{label}</button>
        <button type="button" onClick={() => setEditForm(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
}
