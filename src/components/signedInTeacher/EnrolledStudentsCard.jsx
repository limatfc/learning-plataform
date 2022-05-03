import { useState } from "react";
import list from "../../assets/icons/list.png";

export default function EnrolledStudentsCards({ course }) {
  const [showList, setShowList] = useState(false);

  const studentList = course.students.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));

  function onViewStudents() {
    setShowList(!showList);
  }

  return (
    <div>
      <button onClick={onViewStudents}>
        <h3>
          {course.name}
          <img src={list} alt="three parallels horizontal lines and 3 dots" />
          <label>View List</label>
        </h3>
      </button>
      {showList && <ul>{studentList}</ul>}
    </div>
  );
}
