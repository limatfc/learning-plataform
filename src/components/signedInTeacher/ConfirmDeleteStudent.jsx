import useUserProvider from "../../store/useUserProvider";
import { editDocument } from "../../scripts/firebase/fireStore";
import ConfirmSignedIn from "./ConfirmSignedIn";
import { useState } from "react";

export default function ConfirmDeleteStudent({ item, courseId, setter }) {
  const [status, setStatus] = useState(null);
  const { deleteStudent } = useUserProvider();

  async function onDelete() {
    const newCourse = deleteStudent(item.id, courseId);
    const result = await editDocument("courses", courseId, newCourse);
    if (result === "") {
      setStatus(1);
    }
  }

  if (status === 1)
    return <ConfirmSignedIn setShowModal={setter} message="student" />;

  return (
    <div>
      <div onClick={() => setter(false)} className="backdrop"></div>
      <div className="overlayer">
        <h3>
          Are you sure you want to delete the student {item.name} from this
          course?
        </h3>
        <button className="primary" onClick={onDelete}>
          Yes, I am sure
        </button>
        <button className="secundary" onClick={() => setter(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
