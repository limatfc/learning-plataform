import { filterBySection } from "../../scripts/logic/filterBySection";

import sad from "../../assets/icons/sad.png";
import ActivityItem from "./ActivityItem";

export default function ActivityCard({ dbName, activities }) {
  const filteredItems = filterBySection(activities, dbName);

  const activity = filteredItems.map((item) => (
    <ActivityItem item={item} key={item.id} />
  ));

  return (
    <div className="student-activity-card">
      {activity}
      {filteredItems.length === 0 && (
        <div className="empty-message">
          <img src={sad} alt="a sad face" />
          <p>Oh no, looks like you won't have any fun in this section!</p>
        </div>
      )}
    </div>
  );
}
