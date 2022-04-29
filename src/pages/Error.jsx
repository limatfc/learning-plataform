import { Link } from "react-router-dom";

export default function Error({ setup }) {
  const { message, link, label } = setup;
  return (
    <div>
      <h1>{message}</h1>
      <Link to={link}>{label}</Link>;
    </div>
  );
}
