export default function navigationHandler(user) {
  let link = null;
  user?.role === "teacher"
    ? (link = "/teacher-dashboard")
    : (link = "/student-dashboard");

  return link;
}
