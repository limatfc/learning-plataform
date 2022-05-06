import { useState } from "react";
import InputField from "../InputField";
import data from "../../data/inputFields.json";
import { editDocument } from "../../scripts/firebase/fireStore";
import ConfirmSignedIn from "./ConfirmSignedIn";
import useUserProvider from "../../store/useUserProvider";

export default function CourseEditForm({ oldCourse, setter }) {
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
    const reuzedData = { id: oldCourse.id, students: oldCourse.students };
    const newData = { description, imageDescription: imgDescr };
    const extraData = { name, imageURL, nameURL: oldCourse.nameURL };
    const inputedData = { ...reuzedData, ...newData, ...extraData };
    setStatus(0);
    const result = await editDocument("courses", oldCourse.id, inputedData);
    setStatus(2);
    if (result === "") {
      setStatus(1);
      editCourse(oldCourse.id, inputedData);
    }
  }

  let label = "";
  status === 0 ? (label = "Loading") : (label = "Confirm changes");

  if (status === 1)
    return <ConfirmSignedIn message={"edited"} setShowModal={setter} />;

  return (
    <div>
      <div onClick={() => setter(false)} className="backdrop"></div>
      <div className="overlayer">
        <form onSubmit={onEdit}>
          <h3>Edit {oldCourse.name} course information</h3>
          <InputField setup={info.name} actions={[setName, check]} />
          <InputField setup={info.descr} actions={[setDescription, check]} />
          <InputField setup={info.imageURL} actions={[setImgURL, check]} />
          <InputField setup={info.imgDescr} actions={[setImgDescr, check]} />
          <button className="pri" type="submit">
            {label}
          </button>
          <button className="sec" type="button" onClick={() => setter(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
