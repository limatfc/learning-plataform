export default function FileInput({ setter, label }) {
  function onAddImage(event) {
    const file = event.target.files[0];
    setter(file);
  }

  return (
    <label className="file-input">
      Upload {label}
      <input
        type="file"
        accept="image/png, image/jpeg"
        required
        onChange={onAddImage}
      />
    </label>
  );
}
