import { filterBySection } from "../../scripts/logic/filterBySection";
import sad from "../../assets/icons/sad.png";
import ActionActivityItem from "./ActionActivityItem";
import { useParams } from "react-router-dom";
import useUserProvider from "../../store/useUserProvider";

export default function ActionActivityCard({ dbName, activities }) {
  const { course } = useParams();
  const { courses } = useUserProvider();
  const find = courses.find((item) => item.nameURL === course);
  const courseId = find.id;
  const filteredItems = filterBySection(activities, dbName);
  const activity = filteredItems.map((item) => (
    <ActionActivityItem courseId={courseId} item={item} key={item.id} />
  ));

  return (
    <div>
      {activity}
      {filteredItems.length === 0 && (
        <div className="empty-message">
          <img src={sad} alt="a sad face" />
          <p>
            Oh no, looks like you haven't added anything to this section yet!
          </p>
        </div>
      )}
    </div>
  );
}
