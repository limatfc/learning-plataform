import { Link, useParams } from "react-router-dom";
import useReadData from "../hooks/useReadData";
import useUserProvider from "../store/useUserProvider";
import Loading from "./Loading";
import SectionCard from "../components/signedInStudent/SectionCard";
import Error from "../pages/Error";

// good
export default function StudentCourse() {
  const { courses, coursesHandler } = useUserProvider();
  const { status } = useReadData(coursesHandler, "courses");
  const { course } = useParams();
  const find = courses.find((item) => item.nameURL === course);

  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;
  return (
    <div className="student-course">
      <header>
        <h2>
          Welcome to the <em>{find.name}</em> course
        </h2>
        <p className="description">{find.description}</p>
      </header>
      <div>
        <h3>Let's have some fun!</h3>
        <SectionCard find={find} />
      </div>
      <Link className="label sec" to="/student-dashboard">
        Go back
      </Link>
    </div>
  );
}
