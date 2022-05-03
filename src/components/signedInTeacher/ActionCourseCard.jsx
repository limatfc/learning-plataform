import { Link } from "react-router-dom";
import { useState } from "react";
import useUserProvider from "../../store/useUserProvider";
import ConfirmDelete from "./ConfirmDelete";
import CourseEditForm from "./CourseEditForm";
import Modal from "../Modal";
import garbage from "../../assets/icons/garbage.png";
import edit from "../../assets/icons/edit.png";

export default function ActionCourseCard({ course }) {
  const { deleteCourse } = useUserProvider();
  const [deleteModal, setDeleteModal] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const path = "courses";

  return (
    <div>
      <Link to={`/teacher-dashboard/${course.nameURL}`}>
        <img src={course.imageURL} alt={course.imageDescription} />
        <span>{course.name}</span>
      </Link>
      <button onClick={() => setDeleteModal(true)}>
        <img src={garbage} alt="a garbage can icon" />
      </button>
      <button onClick={() => setEditForm(true)}>
        <img src={edit} alt="the edit icon" />
      </button>
      <Modal>
        {deleteModal && (
          <ConfirmDelete setup={[course, path, setDeleteModal, deleteCourse]} />
        )}
        {editForm && (
          <CourseEditForm oldCourse={course} setEditForm={setEditForm} />
        )}
      </Modal>
    </div>
  );
}