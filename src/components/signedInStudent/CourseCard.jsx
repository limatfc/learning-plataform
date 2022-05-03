import { useState } from "react";
import { Link } from "react-router-dom";
import useUserProvider from "../../store/useUserProvider";
import { editDocument } from "../../scripts/firebase/fireStore";
import Modal from "../Modal";
import ConfirmSignedIn from "../signedInTeacher/ConfirmSignedIn";
import { findStudentMethod } from "../../scripts/logic/findStudent";

export default function CourseCard({ course }) {
  const [status, setStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const { user, enrollStudent, courses } = useUserProvider();
  let checked = findStudentMethod(courses, course.id, user.id);

  async function onEnroll() {
    setStatus(0);
    if (checked) {
      setError(true);
      setStatus(2);
    }
    if (checked === undefined) {
      const studentDetails = { name: user.childName, id: user.id };
      const newState = enrollStudent(studentDetails, course.id);
      const result = await editDocument("courses", course.id, newState);
      if (result === "") {
        setShowModal(true);
        setStatus(1);
      }
    }
  }

  let label = status === 0 ? "Enrolling" : "Enroll in this course";

  return (
    <div>
      <Link to={`/student-dashboard/${course.nameURL}`}>
        <img src={course.imageURL} alt={course.imageDescription} />
        <span>{course.name}</span>
      </Link>
      <label>
        {label}
        <input type="checkbox" onChange={onEnroll} checked={checked} />
      </label>
      {showModal && (
        <Modal>
          <ConfirmSignedIn setShowModal={setShowModal} message="enrolled" />
        </Modal>
      )}
      <p>{error && "Looks like you are already enrolled in this course"}</p>
    </div>
  );
}
