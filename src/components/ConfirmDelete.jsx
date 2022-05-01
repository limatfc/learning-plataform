import { useState } from "react";
import { deleteDocument } from "../scripts/firebase/fireStore";
import useUserProvider from "../store/useUserProvider";
import CompleteMessage from "./CompleteMessage";

export default function ConfirmDelete({ oldCourse, setDeleteModal }) {
  const [status, setStatus] = useState(null);
  const { deleteCourse } = useUserProvider();

  async function onDelete() {
    setStatus(0);
    const result = await deleteDocument("courses", oldCourse.id);

    if (result === "") {
      deleteCourse(oldCourse.id);
      setStatus(1);
    }
  }

  let label = "";
  status === 0 ? (label = "Loading") : (label = "Yes, I am sure");

  if (status === 1)
    return (
      <CompleteMessage message={"deleted"} setShowModal={setDeleteModal} />
    );

  return (
    <div className="overlayer">
      <h2>Are you sure you want to delete the {oldCourse.name} item?</h2>
      <button onClick={onDelete}>{label}</button>
      <button onClick={() => setDeleteModal(false)}>Cancel</button>
    </div>
  );
}
