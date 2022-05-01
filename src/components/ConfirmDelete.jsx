import { useState } from "react";
import { deleteDocument } from "../scripts/firebase/fireStore";
import CompleteMessage from "./CompleteMessage";

export default function ConfirmDelete({ setup }) {
  const [item, path, setter, stateUpdatter] = setup;
  const [status, setStatus] = useState(null);

  async function onDelete() {
    setStatus(0);
    const result = await deleteDocument(path, item.id);

    if (result === "") {
      stateUpdatter(item.id);
      setStatus(1);
    }
  }

  let label = "";
  status === 0 ? (label = "Loading") : (label = "Yes, I am sure");

  if (status === 1)
    return <CompleteMessage message={"deleted"} setShowModal={setter} />;

  return (
    <div className="overlayer">
      <h2>Are you sure you want to delete the {item.name} item?</h2>
      <button onClick={onDelete}>{label}</button>
      <button onClick={() => setter(false)}>Cancel</button>
    </div>
  );
}
