import useReadData from "../hooks/useReadData";
import useUserProvider from "../store/useUserProvider";
import Loading from "./Loading";
import ActionCourseCard from "../components/ActionCourseCard";
import Error from "../pages/Error";
import { useState } from "react";
import Modal from "../components/Modal";
import CourseCreateForm from "../components/CourseCreateForm";

export default function TeacherDashboard() {
  const [showModal, setShowModal] = useState(false);
  const { coursesHandler, courses, user } = useUserProvider();
  const { status } = useReadData(coursesHandler, "courses");
  const courseCards = courses.map((course) => (
    <ActionCourseCard key={course.id} course={course} />
  ));

  if (status === 0) return <Loading />;
  if (status === 2) return <Error setup="" />;
  return (
    <div>
      <h2>eEnglish</h2>
      <h2>Welcome {user.name}</h2>
      <h3>My courses</h3>
      <button onClick={() => setShowModal(true)}>Create a new course</button>
      <div>{courseCards}</div>
      <Modal>
        {showModal && <CourseCreateForm setShowModal={setShowModal} />}
      </Modal>
    </div>
  );
}
