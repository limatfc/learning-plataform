export default function LandingFindUs({ item }) {
  const list = item.info.map((item) => <li key={item}>{item}</li>);

  return (
    <div className="find-us-item">
      <h3>
        <img
          src={require(`../../assets/icons/${item.icon}`)}
          alt={item.description}
        />
        {item.title}
      </h3>
      <ul>{list}</ul>
    </div>
  );
}
