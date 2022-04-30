import CourseCard from "../components/CourseCard";
import useReadData from "../hooks/useReadData";
import useUserProvider from "../store/useUserProvider";
import Loading from "./Loading";
import Error from "../pages/Error";

export default function StudentDashboard() {
  const { coursesHandler, courses, user } = useUserProvider();
  const { status } = useReadData(coursesHandler, "courses");
  const courseCards = courses.map((course) => (
    <CourseCard course={course} key={course.id} />
  ));

  if (status === 0) return <Loading />;
  if (status === 2) return <Error setup="" />;
  return (
    <div>
      <h2>eEnglish</h2>
      <h2>Welcome {user.name}</h2>
      <h3>My courses</h3>
      <div>{courseCards}</div>
    </div>
  );
}
