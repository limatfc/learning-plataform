export default function LandingCourses({ item }) {
  return (
    <div className="landing-courses">
      <img
        src={require(`../../assets/images/${item.imageURL}`)}
        alt={item.imageDescription}
      />
      <h3>{item.text}</h3>
    </div>
  );
}
