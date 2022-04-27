export default function LandingFindUs({ item }) {
  const list = item.info.map((item) => <li>{item}</li>);

  return (
    <div>
      <h3>{item.title}</h3>
      <img
        src={require(`../assets/icons/${item.icon}`)}
        alt={item.description}
      />
      <ul>{list}</ul>
    </div>
  );
}
