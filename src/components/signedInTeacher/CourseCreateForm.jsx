import { useState } from "react";
import { addDocumentWithNoId } from "../../scripts/firebase/fireStore";
import { editName } from "../../scripts/logic/editName";
import useUserProvider from "../../store/useUserProvider";
import ConfirmSignedIn from "./ConfirmSignedIn";
import InputField from "../InputField";
import data from "../../data/inputFields.json";

export default function CourseCreateForm({ setShowModal }) {
  const { addCourse } = useUserProvider();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [imageURL, setImageURL] = useState();
  const [imgDescription, setImgDescr] = useState();
  const [status, setStatus] = useState(null);
  const check = (item) => item !== "";
  const emptyCheck = () => {};
  const info = data.courseCreateForm;
  const checkEmpty = check(name) || check(description) || check(imgDescription);

  async function onCreate(event) {
    event.preventDefault();
    if (!checkEmpty) return null;
    const nameURL = editName(name);
    const mainData = { name, description, imageURL, nameURL };
    const extraData = { imageDescription: imgDescription, students: [] };
    setStatus(0);
    const result = await addDocumentWithNoId("courses", {
      ...mainData,
      ...extraData,
    });
    setStatus(2);
    if (result.data === "") {
      setStatus(1);
      addCourse({ ...mainData, ...extraData, id: result.id });
    }
  }

  let label = "";
  status === 0 ? (label = "Loading") : (label = "Create new course");

  if (status === 1)
    return <ConfirmSignedIn message={"created"} setShowModal={setShowModal} />;

  return (
    <div>
      <div onClick={() => setShowModal(false)} className="backdrop"></div>
      <div className="overlayer">
        <form onSubmit={onCreate}>
          <h3>To add a new course, please enter the information bellow</h3>
          <InputField setup={info.name} actions={[setName, check]} />
          <InputField setup={info.descr} actions={[setDescription, check]} />
          <InputField
            setup={info.imageURL}
            actions={[setImageURL, emptyCheck]}
          />
          <InputField setup={info.imgDescr} actions={[setImgDescr, check]} />
          <button className="primary label" type="submit">
            {label}
          </button>
          <button
            className="secundary label"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
