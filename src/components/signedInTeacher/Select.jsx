import data from "../../data/inputFields.json";

export default function Select({ setter }) {
  const info = data.linkCreateForm;
  const options = info.section.map((item) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ));

  return (
    <select onChange={(event) => setter(event.target.value)}>{options}</select>
  );
}
