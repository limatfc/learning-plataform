export default function FileInput({ setter, label }) {
  function onAddImage(event) {
    const file = event.target.files[0];
    setter(file);
  }

  return (
    <label className="file-input label">
      Upload {label}
      <input
        type="file"
        // This literally, literally removed 1 point from your project...
        // Allow images only on the image button but allow everything else on the upload book or file...
        accept="image/png, image/jpeg"
        required
        onChange={onAddImage}
      />
    </label>
  );
}
