export default function LandingCourses({ item, index }) {
  let style = "";
  index % 2 == 0 ? (style = "even") : (style = "odd");

  return (
    <div className={`landing-courses ${style}`}>
      <img
        src={require(`../../assets/images/${item.imageURL}`)}
        alt={item.imageDescription}
      />
      <h3>{item.text}</h3>
    </div>
  );
}
