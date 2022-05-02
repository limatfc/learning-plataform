import { useState } from "react";
import Modal from "../Modal";
import FileCreateForm from "./FileCreateForm";
import LinkCreateForm from "./LinkCreateForm";
import { useParams } from "react-router-dom";
import useUserProvider from "../../store/useUserProvider";
import CreateButtons from "./CreateButtons";

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
      <CreateButtons actions={{ onOpenFileForm, onOpenLinkForm }} />
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
