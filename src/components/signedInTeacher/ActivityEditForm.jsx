import { useState } from "react";
import { urlComesFromAFileUpload } from "../../scripts/logic/ActivityEditActions";
import { urlComesFromALink } from "../../scripts/logic/ActivityEditActions";
import { urlComesFromAFileEdit } from "../../scripts/logic/ActivityEditActions";
import ConfirmSignedIn from "./ConfirmSignedIn";
import FileInput from "../FileInput";
import InputField from "../InputField";
import Select from "./Select";
import data from "../../data/inputFields.json";

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

  async function onEdit(event) {
    event.preventDefault();
    let newURL = "";
    setStatus(0);
    const staticData = { name, section, type: item.type, id: item.id };
    const inputedData = { ...staticData, url: inputedUrl };
    const data = { path, id: item.id, inputedData, setStatus, editActivity };
    if (inputedUrl) await urlComesFromALink(data);
    if (!inputedUrl) {
      newURL = await urlComesFromAFileUpload(file, item);
      const inputedData1 = { ...staticData, url: newURL };
      if (newURL) {
        const data1 = { path, item, inputedData1, setStatus, editActivity };
        await urlComesFromAFileEdit(data1);
      }
    }
  }

  let label = "";
  status === 0 ? (label = "Loading") : (label = "Confirm changes");

  if (status === 1)
    return <ConfirmSignedIn message={"edited"} setShowModal={setEditForm} />;

  return (
    <div>
      <div onClick={() => setEditForm(false)} className="backdrop"></div>
      <div className="overlayer">
        <h3>To add a new {item.type}, please enter the information bellow</h3>
        <form onSubmit={onEdit}>
          <InputField setup={info.name} actions={[setName, check]} />
          {linkType && (
            <InputField setup={info.url} actions={[setURL, check]} />
          )}
          {filesType && <FileInput setter={setFile} label={item.type} />}
          <Select setter={setSection} />
          <button className="primary label" type="submit">
            {label}
          </button>
          <button
            className="secundary label"
            type="button"
            onClick={() => setEditForm(false)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
