import { useEffect, useState } from "react";
import { getCollection } from "../scripts/firebase/fireStore";
import { useParams } from "react-router-dom";
import useUserProvider from "../store/useUserProvider";
import Loading from "./Loading";
import FilterCards from "../components/FilterCards";

export default function StudentCourse() {
  const [status, setStatus] = useState(null);
  const { courses, activitiesHandler, activities } = useUserProvider();
  const { course } = useParams();
  const find = courses.find((item) => item.nameURL === course);

  useEffect(() => {
    async function readData() {
      setStatus(0);
      const activities = await getCollection(`courses/${find.id}/content`);
      activitiesHandler(activities);
      setStatus(1);
    }
    readData();
  }, [activitiesHandler, find.id]);

  if (status === 0) return <Loading />;
  return (
    <div>
      <header>
        <h2>Welcome to {find.name}</h2>
        <p>{find.description}</p>
      </header>
      <div>
        <h2> {find.name} fun activities</h2>
        <FilterCards activities={activities} />
      </div>
    </div>
  );
}
