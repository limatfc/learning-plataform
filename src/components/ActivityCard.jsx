import { filterBySection } from "../scripts/logic/filterBySection";
import control from "../assets/icons/control.png";
import file from "../assets/icons/file.png";
import camera from "../assets/icons/camera.png";
import play from "../assets/icons/play.png";
import sad from "../assets/icons/sad.png";

export default function ActivityCard({ sectionDbName, activities }) {
  const filteredItems = filterBySection(activities, sectionDbName);
  const activity = filteredItems.map((item) => {
    let imageSrc = "";
    if (item.type === "file") imageSrc = file;
    if (item.type === "video") imageSrc = play;
    if (item.type === "image") imageSrc = camera;
    if (item.type === "game") imageSrc = control;
    return (
      <div key={item.id}>
        <a href={item.url} rel="noreferrer" target="_blank">
          <img src={imageSrc} alt="an icon" />
          {item.name}
        </a>
      </div>
    );
  });

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
