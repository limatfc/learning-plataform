import ActivityCard from "./ActivityCard";
import useReadData from "../../hooks/useReadData";
import useUserProvider from "../../store/useUserProvider";
import Error from "../../pages/Error";
import data from "../../data/activityCard.json";

export default function SectionCard({ find }) {
  const { activitiesHandler, activities } = useUserProvider();
  const { status } = useReadData(
    activitiesHandler,
    `courses/${find.id}/content/`
  );

  if (status === 0) return null;
  if (status === 2) return <Error />;

  const sections = data.map((item) => (
    <div className="section-card" key={item.icon}>
      <h3>
        <img src={require(`../../assets/icons/${item.icon}`)} alt="an icon" />
        {item.sectionTitle}
      </h3>
      <ActivityCard activities={activities} dbName={item.dbName} />
    </div>
  ));

  return <div>{sections}</div>;
}
