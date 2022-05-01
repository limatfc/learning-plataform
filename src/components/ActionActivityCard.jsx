import { filterBySection } from "../scripts/logic/filterBySection";
import sad from "../assets/icons/sad.png";
import ActionActivityItem from "./ActionActivityItem";
import { useParams } from "react-router-dom";
import useUserProvider from "../store/useUserProvider";

export default function ActionActivityCard({ sectionDbName, activities }) {
  const { course } = useParams();
  const { courses } = useUserProvider();
  const find = courses.find((item) => item.nameURL === course);
  const courseId = find.id;
  const filteredItems = filterBySection(activities, sectionDbName);
  const activity = filteredItems.map((item) => (
    <ActionActivityItem courseId={courseId} item={item} key={item.id} />
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
