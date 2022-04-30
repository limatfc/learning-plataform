import { useState } from "react";
import InputField from "../components/InputField";
import data from "../data/inputFields.json";

export default function CourseEditForm({ oldName, setEditForm }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const check = (item) => item !== "";
  const info = data.CourseEditForm;

  function onEdit() {}

  return (
    <div className="overlayer">
      <form>
        <h3>Edit {oldName} course information</h3>
        <InputField setup={info.name} actions={[setName, check]} />
        <InputField setup={info.descr} actions={[setDescription, check]} />
        <button type="submit" onClick={onEdit}>
          Confirm changes
        </button>
        <button type="button" onClick={() => setEditForm(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
}
