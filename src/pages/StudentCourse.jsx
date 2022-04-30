import { useParams } from "react-router-dom";
import useReadData from "../hooks/useReadData";
import useUserProvider from "../store/useUserProvider";
import Loading from "./Loading";
import FilterActivities from "../components/FilterActivities";

export default function StudentCourse() {
  const { courses, coursesHandler } = useUserProvider();
  const { status } = useReadData(coursesHandler, "courses");
  const { course } = useParams();
  const find = courses.find((item) => item.nameURL === course);

  if (status === 0) return <Loading />;
  return (
    <div>
      <header>
        <h2>Welcome to {find.name}</h2>
        <p>{find.description}</p>
      </header>
      <div>
        <h2> {find.name} fun activities</h2>
        <FilterActivities find={find} />
      </div>
    </div>
  );
}
