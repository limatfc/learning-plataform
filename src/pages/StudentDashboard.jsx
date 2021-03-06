import CourseCard from "../components/signedInStudent/CourseCard";
import useReadData from "../hooks/useReadData";
import useUserProvider from "../store/useUserProvider";
import Loading from "./Loading";
import Error from "../pages/Error";

export default function StudentDashboard() {
  const { coursesHandler, courses, user } = useUserProvider();
  const { status } = useReadData(coursesHandler, "courses");
  const courseCards = courses.map((course, index) => (
    <CourseCard course={course} key={course.id} index={index} />
  ));

  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;
  return (
    <div className="dashboard">
      <h2>Welcome {user.childName}</h2>
      <h3>My courses</h3>
      {courses.length === 0 && (
        <p>Oh no, looks like there are no courses yet!</p>
      )}
      <div className="dashboard-card">{courseCards}</div>
    </div>
  );
}
