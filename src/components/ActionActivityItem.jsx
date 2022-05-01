import { useState } from "react";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";
import control from "../assets/icons/control.png";
import file from "../assets/icons/file.png";
import camera from "../assets/icons/camera.png";
import play from "../assets/icons/play.png";
import garbage from "../assets/icons/garbage.png";
import edit from "../assets/icons/edit.png";
import useUserProvider from "../store/useUserProvider";
import ActivityEditForm from "./ActivityEditForm";

export default function ActionActivityItem({ item, courseId }) {
  const { deleteActivity, editActivity } = useUserProvider();
  const [deleteModal, setDeleteModal] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const path = `courses/${courseId}/content`;
  let imageSrc = "";
  if (item.type === "file") imageSrc = file;
  if (item.type === "video") imageSrc = play;
  if (item.type === "image") imageSrc = camera;
  if (item.type === "game") imageSrc = control;

  return (
    <div>
      <a href={item.url} rel="noreferrer" target="_blank">
        <img src={imageSrc} alt="an icon" />
        {item.name}
      </a>
      <button onClick={() => setDeleteModal(true)}>
        <img src={garbage} alt="a trash can icon" />
      </button>
      <button onClick={() => setEditForm(true)}>
        <img src={edit} alt="the edit icon" />
      </button>
      <Modal>
        {deleteModal && (
          <ConfirmDelete setup={[item, path, setDeleteModal, deleteActivity]} />
        )}
        {editForm && (
          <ActivityEditForm setup={[item, path, setEditForm, editActivity]} />
        )}
      </Modal>
    </div>
  );
}
