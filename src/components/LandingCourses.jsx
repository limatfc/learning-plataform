export default function LandingCourses({ item }) {
  return (
    <div>
      <img
        src={require(`../assets/images/${item.imageURL}`)}
        alt={item.imageDescription}
      />
      <h3>{item.text}</h3>
    </div>
  );
}
