import { useState } from "react";
import useReadData from "../hooks/useReadData";
import useUserProvider from "../store/useUserProvider";
import Loading from "./Loading";
import Error from "../pages/Error";
import Modal from "../components/Modal";
import ActionCourseCard from "../components/signedInTeacher/ActionCourseCard";
import CourseCreateForm from "../components/signedInTeacher/CourseCreateForm";
import EnrolledStudentsCards from "../components/signedInTeacher/EnrolledStudentsCard";

export default function TeacherDashboard() {
  const [showModal, setShowModal] = useState(false);
  const { coursesHandler, courses, user } = useUserProvider();
  const { status } = useReadData(coursesHandler, "courses");
  const courseCards = courses.map((course, index) => (
    <ActionCourseCard key={course.id} course={course} index={index} />
  ));

  const enrolledStudentsCards = courses.map((course) => (
    <EnrolledStudentsCards course={course} key={course.id} />
  ));

  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;
  return (
    <div className="teacher-dashboard">
      <h2>Welcome teacher {user.name}!</h2>
      <h3>My courses</h3>
      <button className="pri label" onClick={() => setShowModal(true)}>
        Create a new course
      </button>
      <div className="teacher-dashboard-card">{courseCards}</div>
      <h3>My students</h3>
      <div>{enrolledStudentsCards}</div>
      <Modal>{showModal && <CourseCreateForm setter={setShowModal} />}</Modal>
    </div>
  );
}
