import { useCallback, useEffect, useState } from "react";
import { getLocalStorage } from "../scripts/localStorage/localStorage";
import { readDocument } from "../scripts/firebase/fireStore";
import userContext from "./user-context";
import { editState, addState, deleteState } from "../scripts/logic/state";
import { enrolleUser, deleteUser } from "../scripts/logic/state";

export default function UserProvider({ children }) {
  const [uid, setUid] = useState();
  const [user, setUser] = useState();
  const [courses, setCourses] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function onFirstLoad() {
      const parse = getLocalStorage();
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
    const result = addState(courses, inputedData);
    setCourses(result);
  }

  function editCourse(id, inputedData) {
    const result = editState(courses, id, inputedData);
    setCourses(result);
  }

  function deleteCourse(id) {
    const result = deleteState(courses, id);
    setCourses(result);
  }

  function deleteActivity(id) {
    const result = deleteState(activities, id);
    setActivities(result);
  }

  function addActivity(inputedData) {
    const result = addState(activities, inputedData);
    setActivities(result);
  }

  function editActivity(id, inputedData) {
    const result = editState(activities, id, inputedData);
    setActivities(result);
  }

  function enrollStudent(studentDetails, courseId) {
    const result = enrolleUser(courses, courseId, studentDetails);
    setCourses(result.copyCourses);
    return result.find;
  }

  function deleteStudent(studentId, courseId) {
    const result = deleteUser(courses, courseId, studentId);
    setCourses(result.copyCourses);
    return result.find;
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
