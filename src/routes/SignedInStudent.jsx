import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import SignUp from "../pages/SignUp";
import StudentDashboard from "../pages/StudentDashboard";
import Error from "../pages/Error";
import errorRoutes from "../data/routes.json";

export default function SignedInStudent() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="*" element={<Error setup={errorRoutes.signedInStudent} />} />
    </Routes>
  );
}