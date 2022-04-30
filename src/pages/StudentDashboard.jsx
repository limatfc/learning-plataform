import CourseCard from "../components/CourseCard";
import useReadData from "../hooks/useReadData";
import useUserProvider from "../store/useUserProvider";
import Loading from "./Loading";

export default function StudentDashboard() {
  const { coursesHandler, courses } = useUserProvider();
  const { status } = useReadData(coursesHandler, "courses");
  const courseCard = courses.map((course) => (
    <CourseCard course={course} key={course.id} />
  ));

  if (status === 0) return <Loading />;
  return (
    <div>
      <h2>eEnglish</h2>
      <h3>My courses</h3>
      <div>{courseCard}</div>
    </div>
  );
}
