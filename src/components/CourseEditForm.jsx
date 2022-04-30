import { useState } from "react";
import InputField from "../components/InputField";
import data from "../data/inputFields.json";
import { editDocument } from "../scripts/firebase/fireStore";
import CompleteMessage from "./CompleteMessage";
import useUserProvider from "../store/useUserProvider";

export default function CourseEditForm({ oldCourse, setEditForm }) {
  const { editCourse } = useUserProvider();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [imgDescr, setImgDescr] = useState();
  const [imageURL, setImgURL] = useState();
  const [status, setStatus] = useState(null);
  const check = (item) => item !== "";
  const info = data.courseEditForm;
  const checkEmpty =
    !check(name) || !check(description) || !check(imgDescr) || !check(imageURL);

  async function onEdit(event) {
    event.preventDefault();
    if (checkEmpty) return null;
    const inputedData = {
      name,
      description,
      imageDescription: imgDescr,
      imageURL,
    };
    setStatus(0);
    const result = await editDocument("courses", oldCourse.id, inputedData);

    if (result === "") {
      console.log("a");
      setStatus(1);
      editCourse(oldCourse.id, inputedData);
    }
  }

  let label = "";
  status === 0 ? (label = "Loading") : (label = "Confirm changes");

  if (status === 1)
    return <CompleteMessage message={"edited"} setShowModal={setEditForm} />;

  return (
    <div className="overlayer">
      <form onSubmit={onEdit}>
        <h3>Edit {oldCourse.name} course information</h3>
        <InputField setup={info.name} actions={[setName, check]} />
        <InputField setup={info.descr} actions={[setDescription, check]} />
        <InputField setup={info.imageURL} actions={[setImgDescr, check]} />
        <InputField setup={info.imgDescr} actions={[setImgURL, check]} />
        <button type="submit">{label}</button>
        <button type="button" onClick={() => setEditForm(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
}
