import { Link, useParams } from "react-router-dom";
import useReadData from "../hooks/useReadData";
import useUserProvider from "../store/useUserProvider";
import Loading from "./Loading";
import Error from "../pages/Error";
import ActionSectionCard from "../components/signedInTeacher/ActionSectionCard";
import CreateActivityMenu from "../components/signedInTeacher/CreateActivityMenu";

export default function TeacherCourse() {
  const { courses, coursesHandler } = useUserProvider();
  const { status } = useReadData(coursesHandler, "courses");
  const { course } = useParams();
  const find = courses.find((item) => item.nameURL === course);

  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;
  return (
    <div className="teacher-course">
      <header>
        <h2>
          Welcome to the <em>{find.name}</em> course
        </h2>
        <p className="actions-description">
          Here you can edit, add and delete the activities materials for this
          course
        </p>
        <h3>The activities for this course are:</h3>
      </header>
      <CreateActivityMenu />
      <div>
        <ActionSectionCard find={find} />
      </div>
      <Link className="sec label" to="/teacher-dashboard">
        Go back
      </Link>
    </div>
  );
}
