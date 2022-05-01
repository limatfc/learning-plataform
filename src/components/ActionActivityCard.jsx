import { filterBySection } from "../scripts/logic/filterBySection";
import sad from "../assets/icons/sad.png";
import ActionActivityItem from "./ActionActivityItem";

export default function ActionActivityCard({ sectionDbName, activities }) {
  const filteredItems = filterBySection(activities, sectionDbName);
  const activity = filteredItems.map((item) => (
    <ActionActivityItem item={item} key={item.id} />
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
