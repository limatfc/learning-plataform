import { useState } from "react";
import { deleteFile } from "../../scripts/firebase/cloudStorage";
import { deleteDocument } from "../../scripts/firebase/fireStore";
import ConfirmSignedIn from "./ConfirmSignedIn";

export default function ConfirmDelete({ setup }) {
  const [item, path, setter, stateUpdatter] = setup;
  const [status, setStatus] = useState(null);

  async function onDelete() {
    setStatus(0);
    const result = await deleteDocument(path, item.id);
    setStatus(2);
    if (result === "") {
      stateUpdatter(item.id);
      setStatus(1);
    }
    if (item.type === "file" || item.type === "image") {
      deleteFile(`activity/${item.id}.png`);
    }
  }

  let label = "";
  status === 0 ? (label = "Loading") : (label = "Yes, I am sure");

  if (status === 1)
    return <ConfirmSignedIn message="deleted" setShowModal={setter} />;

  return (
    <div>
      <div onClick={() => setter(false)} className="backdrop"></div>
      <div className="overlayer">
        <h3>Are you sure you want to delete the {item.name} item?</h3>
        <button className="label primary" onClick={onDelete}>
          {label}
        </button>
        <button className="label secundary" onClick={() => setter(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
