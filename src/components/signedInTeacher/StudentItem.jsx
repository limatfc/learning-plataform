import garbage from "../../assets/icons/garbage.png";
import useUserProvider from "../../store/useUserProvider";
import { editDocument } from "../../scripts/firebase/fireStore";
import { useState } from "react";
import Modal from "../Modal";
import ConfirmSignedIn from "./ConfirmSignedIn";

export default function StudentItem({ item, courseId }) {
  const [showModal, setShowModal] = useState(false);
  const { deleteStudent } = useUserProvider();

  async function onDelete() {
    const newCourse = deleteStudent(item.id, courseId);
    const result = await editDocument("courses", courseId, newCourse);
    if (result === "") setShowModal(true);
  }
  return (
    <li>
      {item.name}
      <button onClick={onDelete}>
        <img src={garbage} alt="a garbage can" />
      </button>
      {showModal && (
        <Modal>
          <ConfirmSignedIn
            message="student deleted"
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </li>
  );
}
