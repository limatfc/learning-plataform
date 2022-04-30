import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link to={`/dashboard-${course.nameURL}`}>
      <img src={course.imageURL} alt={course.imageDescription} />
      <span>{course.name}</span>
    </Link>
  );
}
