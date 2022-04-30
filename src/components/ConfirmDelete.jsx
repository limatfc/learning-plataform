export default function ConfirmDelete({ name, setDeleteModal }) {
  function onDelete() {}

  return (
    <div className="overlayer">
      <h2>Are you sure you want to delete the {name} course?</h2>
      <button onClick={onDelete}>Yes, I am sure</button>
      <button onClick={() => setDeleteModal(false)}>Cancel</button>
    </div>
  );
}
