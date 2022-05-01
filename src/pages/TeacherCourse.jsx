import { Link, useParams } from "react-router-dom";
import useReadData from "../hooks/useReadData";
import useUserProvider from "../store/useUserProvider";
import Loading from "./Loading";
import Error from "../pages/Error";
import ActionSectionCard from '../components/ActionSectionCard';

export default function TeacherCourse() {
  const { courses, coursesHandler, user } = useUserProvider();
  const { status } = useReadData(coursesHandler, "courses");
  const { course } = useParams();
  const find = courses.find((item) => item.nameURL === course);
  
  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;
  return (
    <div>
      <header>
        <h2>eEnglish</h2>
        <h2>
          Hi teacher {user.name}, welcome!
        </h2>
       <p>Here you can edit, add and delete the activities materials for your {find.name} course.</p>
      </header>
      <div>
        <h2> {find.name} fun activities</h2>
        <ActionSectionCard find={find}/>
      </div>
      <Link to="/teacher-dashboard">Go back</Link>
    </div>
  );
}


