import ActivityCard from "./ActivityCard";
import useReadData from "../hooks/useReadData";
import useUserProvider from "../store/useUserProvider";
import data from "../data/activityCard.json";

export default function FilterActivities({ find }) {
  const { activitiesHandler, activities } = useUserProvider();
  const { status2 } = useReadData(
    activitiesHandler,
    `courses/${find.id}/content/`
  );
  if (status2 === 0) return null;

  const sections = data.map((item) => (
    <div key={item.icon}>
      <img src={require(`../assets/icons/${item.icon}`)} alt="an icon" />
      <h3>{item.sectionTitle}</h3>
      <ActivityCard
        activities={activities}
        sectionDbName={item.sectionDbName}
      />
    </div>
  ));

  return <div>{sections}</div>;
}
