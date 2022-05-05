import garbage from "../../assets/icons/garbage.png";
import { useState } from "react";
import Modal from "../Modal";
import ConfirmDeleteStudent from "./ConfirmDeleteStudent";

export default function StudentItem({ item, courseId }) {
  const [showDelete, setShowDelete] = useState(false);

  console.log(showDelete);
  return (
    <li className="student-item">
      <span>{item.name}</span>
      <button onClick={() => setShowDelete(true)}>
        <img src={garbage} alt="a garbage can" />
      </button>
      <Modal>
        {showDelete && (
          <ConfirmDeleteStudent
            item={item}
            courseId={courseId}
            setter={setShowDelete}
          />
        )}
      </Modal>
    </li>
  );
}
