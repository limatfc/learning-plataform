import { Link, useParams } from "react-router-dom";
import useReadData from "../hooks/useReadData";
import useUserProvider from "../store/useUserProvider";
import Loading from "./Loading";
import SectionCard from "../components/signedInStudent/SectionCard";
import Error from "../pages/Error";

export default function StudentCourse() {
  const { courses, coursesHandler } = useUserProvider();
  const { status } = useReadData(coursesHandler, "courses");
  const { course } = useParams();
  const find = courses.find((item) => item.nameURL === course);

  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;
  return (
    <div>
      <header>
        <h2>This is the {find.name} course</h2>
        <p>{find.description}</p>
      </header>
      <div>
        <h2> {find.name} fun activities</h2>
        <SectionCard find={find} />
      </div>
      <Link to="/student-dashboard">Go back</Link>
    </div>
  );
}
