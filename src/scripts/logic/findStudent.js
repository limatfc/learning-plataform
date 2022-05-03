export function findStudentMethod(courses, courseID, studentID) {
  const findCourse = courses.find((item) => item.id === courseID);
  const findStudent = findCourse.students.find((item) => item.id === studentID);
  return findStudent;
}
