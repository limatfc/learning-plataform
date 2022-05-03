import { useCallback, useEffect, useState } from "react";
import {
  setLocalStorage,
  getLocalStorage,
} from "../scripts/localStorage/localStorage";
import { readDocument } from "../scripts/firebase/fireStore";
import userContext from "./user-context";
const localStorageKey = "userUID";

export default function UserProvider({ children }) {
  const [uid, setUid] = useState();
  const [user, setUser] = useState();
  const [courses, setCourses] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (uid) {
      setLocalStorage(localStorageKey, uid);
    }
  }, [uid]);

  useEffect(() => {
    async function onFirstLoad() {
      const parse = getLocalStorage(localStorageKey);
      if (parse) {
        setUid(parse);
      }
    }
    onFirstLoad();
  }, [uid]);

  useEffect(() => {
    async function loadUser() {
      if (uid) {
        const userData = await readDocument("user", uid);
        setUser(userData);
      }
    }
    loadUser();
  }, [uid]);

  function uidHandler(uid) {
    setUid(uid);
  }

  function userHandler(userInfo) {
    setUser(userInfo);
  }

  function addCourse(inputedData) {
    const copyCourses = [...courses];
    copyCourses.push(inputedData);
    setCourses(copyCourses);
  }

  function editCourse(id, inputedData) {
    const copyCourses = [...courses];
    const findIndex = copyCourses.findIndex((item) => item.id === id);
    copyCourses.splice(findIndex, 1, inputedData);
    setCourses(copyCourses);
  }

  function deleteCourse(id) {
    const copyCourses = [...courses];
    let findIndex = copyCourses.findIndex((item) => item.id === id);
    copyCourses.splice(findIndex, 1);
    setCourses(copyCourses);
  }

  function deleteActivity(id) {
    const copyActivity = [...activities];
    let findIndex = copyActivity.findIndex((item) => item.id === id);
    copyActivity.splice(findIndex, 1);
    setActivities(copyActivity);
  }

  function addActivity(inputedData) {
    const copyActivity = [...activities];
    copyActivity.push(inputedData);
    setActivities(copyActivity);
  }

  function editActivity(id, inputedData) {
    const copyActivity = [...activities];
    const findIndex = copyActivity.findIndex((item) => item.id === id);
    copyActivity.splice(findIndex, 1, inputedData);
    setActivities(copyActivity);
  }

  function enrollStudent(studentDetails, courseId) {
    const copyCourses = [...courses];
    const find = copyCourses.find((item) => item.id === courseId);
    find.students.push(studentDetails);
    setCourses(copyCourses);
    return find;
  }

  function deleteStudent(studentId, courseId) {
    const copyCourses = [...courses];
    const find = copyCourses.find((item) => item.id === courseId);
    let findIndex = find.students.findIndex((item) => item.id === studentId);
    find.students.splice(findIndex, 1);
    setCourses(copyCourses);
    return find;
  }

  const coursesHandler = useCallback((courses) => {
    setCourses(courses);
  }, []);

  const activitiesHandler = useCallback((activities) => {
    setActivities(activities);
  }, []);

  const value = {
    uid,
    user,
    courses,
    activities,
    uidHandler,
    userHandler,
    coursesHandler,
    activitiesHandler,
    addCourse,
    editCourse,
    deleteCourse,
    deleteActivity,
    addActivity,
    editActivity,
    enrollStudent,
    deleteStudent,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
