import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link to={`/dashboard-${course.nameURL}`}>
      <h1>Hello</h1>
      <img src={course.imageURL} alt={course.imageDescription} />
      <span>{course.name}</span>
    </Link>
  );
}
