export function editState(state, id, inputedData) {
  const stateCopy = [...state];
  inputedData.id = id;
  let findIndex = stateCopy.findIndex((item) => item.id === id);
  stateCopy.splice(findIndex, 1, inputedData);
  return stateCopy;
}

export function addState(state, inputedData) {
  const stateCopy = [...state];
  stateCopy.push(inputedData);
  return stateCopy;
}

export function deleteState(state, id) {
  const stateCopy = [...state];
  let findIndex = stateCopy.findIndex((item) => item.id === id);
  stateCopy.splice(findIndex, 1);
  return stateCopy;
}

export function enrolleUser(courses, courseId, studentDetails) {
  const copyCourses = [...courses];
  const find = copyCourses.find((item) => item.id === courseId);
  find.students.push(studentDetails);
  return { find, copyCourses };
}

export function deleteUser(courses, courseId, studentId) {
  const copyCourses = [...courses];
  const find = copyCourses.find((item) => item.id === courseId);
  let findIndex = find.students.findIndex((item) => item.id === studentId);
  find.students.splice(findIndex, 1);
  return { copyCourses, find };
}
