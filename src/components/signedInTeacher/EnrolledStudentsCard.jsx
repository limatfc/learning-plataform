import { useState } from "react";
import list from "../../assets/icons/list.png";
import StudentItem from "./StudentItem";
import sad from "../../assets/icons/sad.png";

export default function EnrolledStudentsCards({ course }) {
  const [showList, setShowList] = useState(false);
  const label = !showList ? "View List" : "Hide List";

  const studentItem = course?.students.map((item) => (
    <StudentItem item={item} key={item.id} courseId={course.id} />
  ));

  function onViewStudents() {
    setShowList(!showList);
  }

  return (
    <div className="enrolled-students">
      <button className="enrolled-card" onClick={onViewStudents}>
        <label className="label">{course.name}</label>
        <div className="grow"></div>
        <img src={list} alt="three parallels horizontal lines and 3 dots" />
        <small>{label}</small>
      </button>
      {showList && <ul>{studentItem}</ul>}
      {showList && studentItem.length === 0 && (
        <div className="empty-message">
          <img src={sad} alt="a sad emoji" />
          <p>Ops, looks like there are no students enrolled in this course</p>
        </div>
      )}
    </div>
  );
}
