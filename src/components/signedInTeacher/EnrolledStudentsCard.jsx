import { useState } from "react";
import list from "../../assets/icons/list.png";
import StudentItem from "./StudentItem";
import sad from "../../assets/icons/sad.png";

export default function EnrolledStudentsCards({ course }) {
  const [showList, setShowList] = useState(false);

  const studentItem = course.students.map((item) => (
    <StudentItem item={item} key={item.id} courseId={course.id} />
  ));

  function onViewStudents() {
    setShowList(!showList);
  }

  return (
    <div>
      <button onClick={onViewStudents}>
        <label>{course.name}</label>
        <img src={list} alt="three parallels horizontal lines and 3 dots" />
        <label>View List</label>
      </button>
      {showList && <ul>{studentItem}</ul>}
      {showList && studentItem.length === 0 && (
        <>
          <p>Ops, looks like there are no students enrolled in this course</p>
          <img src={sad} alt="a sad emoji" />
        </>
      )}
    </div>
  );
}
