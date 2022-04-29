import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { getCollection } from "../scripts/firebase/fireStore";
import useUserProvider from "../store/useUserProvider";
import Loading from "./Loading";

export default function StudentDashboard() {
  const [status, setStatus] = useState(null);
  const { coursesHandler, courses } = useUserProvider();

  useEffect(() => {
    async function readData() {
      setStatus(0);
      const courses = await getCollection("courses");
      coursesHandler(courses);
      setStatus(1);
    }
    readData();
  }, [coursesHandler]);

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
