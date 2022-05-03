import { filterBySection } from "../../scripts/logic/filterBySection";

import sad from "../../assets/icons/sad.png";
import ActivityItem from "./ActivityItem";

export default function ActivityCard({ sectionDbName, activities }) {
  const filteredItems = filterBySection(activities, sectionDbName);
  const activity = filteredItems.map((item) => (
    <ActivityItem item={item} key={item.id} />
  ));

  return (
    <div>
      {activity}
      {filteredItems.length === 0 && (
        <>
          <img src={sad} alt="a sad face" />
          <p>Oh no, looks like you won't have any fun in this section!</p>
        </>
      )}
    </div>
  );
}
