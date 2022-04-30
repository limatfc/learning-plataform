import InputField from "./InputField";
import data from "../data/inputFields.json";
import { useState } from "react";
import { addDocumentWithNoId } from "../scripts/firebase/fireStore";
import { editName } from "../scripts/logic/editName";
import useUserProvider from "../store/useUserProvider";

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

  async function onCreate(event) {
    event.preventDefault();
    const nameURL = editName(name);
    const inputedData = {
      name,
      description,
      imageURL,
      nameURL,
      imageDescription: imgDescription,
      students: [],
    };
    setStatus(0);
    const result = await addDocumentWithNoId("courses", inputedData);
    if (result === "") {
      setStatus(1);
      addCourse(inputedData);
    }
  }

  let label = "";
  status === 0 ? (label = "Loading") : (label = "Create new course");

  if (status === 1)
    return (
      <div className="overlayer">
        <p>YAY, course created successfully!</p>
        <button type="button" onClick={() => setShowModal(false)}>
          Close
        </button>
      </div>
    );

  return (
    <div className="overlayer">
      <form onSubmit={onCreate}>
        <h3>To add a new course, please enter the information bellow</h3>
        <InputField setup={info.name} actions={[setName, check]} />
        <InputField setup={info.descr} actions={[setDescription, check]} />
        <InputField setup={info.imageURL} actions={[setImageURL, emptyCheck]} />
        <InputField setup={info.imgDescr} actions={[setImgDescr, check]} />
        <button type="submit">{label}</button>
        <button type="button" onClick={() => setShowModal(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
}
