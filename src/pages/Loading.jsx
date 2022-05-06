import loading from "../assets/images/loading.png";

export default function Loading() {
  return (
    <div className="loading">
      <h2>Please wait while we prepare everything for you!</h2>
      <img src={loading} alt="a computer downloading data" />
    </div>
  );
}
