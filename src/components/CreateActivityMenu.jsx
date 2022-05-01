import { useState } from "react";
import Modal from "./Modal";
import FileCreateForm from "./FileCreateForm";
import LinkCreateForm from "./LinkCreateForm";
import { useParams } from "react-router-dom";
import useUserProvider from "../store/useUserProvider";

export default function CreateActivityMenu() {
  const { course } = useParams();
  const { courses } = useUserProvider();
  const [fileForm, setFileForm] = useState(false);
  const [linkForm, setLinkForm] = useState(false);
  const [type, setType] = useState("");
  const find = courses.find((item) => item.nameURL === course);

  function onOpenFileForm(event) {
    setFileForm(true);
    setType(event.target.value);
  }

  function onOpenLinkForm(event) {
    setLinkForm(true);
    setType(event.target.value);
  }

  function onCloseFileForm() {
    setFileForm(false);
  }

  function onCloseLinkForm() {
    setLinkForm(false);
  }
  return (
    <div>
      <button onClick={onOpenFileForm} value="file">
        Create a file
      </button>
      <button onClick={onOpenLinkForm} value="video">
        Create a video
      </button>
      <button onClick={onOpenFileForm} value="image">
        Create an image
      </button>
      <button onClick={onOpenLinkForm} value="game">
        Create a game
      </button>
      <Modal>
        {fileForm && (
          <FileCreateForm id={find.id} type={type} action={onCloseFileForm} />
        )}
        {linkForm && (
          <LinkCreateForm id={find.id} type={type} action={onCloseLinkForm} />
        )}
      </Modal>
    </div>
  );
}
