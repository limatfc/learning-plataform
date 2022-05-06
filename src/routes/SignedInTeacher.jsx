import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import SignUp from "../pages/SignUp";
import TeacherDashboard from "../pages/TeacherDashboard";
import TeacherCourse from "../pages/TeacherCourse";
import Error from "../pages/Error";

export default function SignedInTeacher() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      <Route path="/teacher-dashboard/:course" element={<TeacherCourse />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
