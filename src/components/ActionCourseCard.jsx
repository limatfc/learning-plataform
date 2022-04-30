import { Link } from "react-router-dom";
import garbage from "../assets/icons/garbage.png";
import edit from "../assets/icons/edit.png";
import { useState } from "react";
import Modal from "../components/Modal";
import ConfirmDelete from "./ConfirmDelete";
import CourseEditForm from "./CourseEditForm";

export default function ActionCourseCard({ course }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const courseName = course.name;

  return (
    <div>
      <Link to={`/dashboard-${course.nameURL}`}>
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
          <ConfirmDelete oldName={courseName} setDeleteModal={setDeleteModal} />
        )}
        {editForm && (
          <CourseEditForm oldName={courseName} setEditForm={setEditForm} />
        )}
      </Modal>
    </div>
  );
}