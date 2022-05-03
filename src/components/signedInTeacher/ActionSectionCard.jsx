import ActionActivityCard from "./ActionActivityCard";
import useReadData from "../../hooks/useReadData";
import useUserProvider from "../../store/useUserProvider";
import Error from "../../pages/Error";
import data from "../../data/activityCard.json";

export default function ActionSectionCard({ find }) {
  const { activitiesHandler, activities } = useUserProvider();
  const { status } = useReadData(
    activitiesHandler,
    `courses/${find.id}/content/`
  );

  if (status === 0) return null;
  if (status === 2) return <Error setup="" />;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <img src={require(`../../assets/icons/${item.icon}`)} alt="an icon" />
          <h3>{item.sectionTitle}</h3>
          <ActionActivityCard activities={activities} dbName={item.dbName} />
        </div>
      ))}
    </div>
  );
}
