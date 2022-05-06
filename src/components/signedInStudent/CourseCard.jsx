import { useState } from "react";
import { Link } from "react-router-dom";
import useUserProvider from "../../store/useUserProvider";
import { editDocument } from "../../scripts/firebase/fireStore";
import Modal from "../Modal";
import ConfirmSignedIn from "../signedInTeacher/ConfirmSignedIn";
import { findStudentMethod } from "../../scripts/logic/findStudent";
import { notCheckedActions } from "../../scripts/logic/CourseCard";
import { checkedActions } from "../../scripts/logic/CourseCard";

export default function CourseCard({ course, index }) {
  const [status, setStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const { user, enrollStudent, courses } = useUserProvider();
  let checked = findStudentMethod(courses, course.id, user.id);

  async function onEnroll() {
    setStatus(0);
    if (checked) checkedActions(setError, setStatus);
    if (checked === undefined) {
      const studentDetails = { name: user.childName, id: user.id };
      const newState = enrollStudent(studentDetails, course.id);
      const result = await editDocument("courses", course.id, newState);
      if (result === "") notCheckedActions(setShowModal, setStatus);
    }
  }

  let label = status === 0 ? "Enrolling" : "Enroll in this course";
  let style = index % 2 == 0 ? "courseEven" : "courseOdd";
  return (
    <div className={`${style} course-card`}>
      <Link className="link" to={`/student-dashboard/${course.nameURL}`}>
        <img src={course.imageURL} alt={course.imageDescription} />
        <span className="label">{course.name}</span>
      </Link>
      {!checked && (
        <label className="checkbox">
          {label}
          <input type="checkbox" onChange={onEnroll} />
        </label>
      )}
      {showModal && (
        <Modal>
          <ConfirmSignedIn setShowModal={setShowModal} message="enrolled" />
        </Modal>
      )}
    </div>
  );
}
