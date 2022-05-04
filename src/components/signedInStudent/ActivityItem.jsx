import control from "../../assets/icons/control.png";
import file from "../../assets/icons/file.png";
import camera from "../../assets/icons/camera.png";
import play from "../../assets/icons/play.png";

export default function ActivityItem({ item }) {
  let imageSrc = "";
  if (item.type === "file") imageSrc = file;
  if (item.type === "video") imageSrc = play;
  if (item.type === "image") imageSrc = camera;
  if (item.type === "game") imageSrc = control;

  return (
    <div className="activity-item">
      <a href={item.url} rel="noreferrer" target="_blank">
        <img src={imageSrc} alt="an icon" />
        {item.name}
      </a>
    </div>
  );
}
