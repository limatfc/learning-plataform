export default function CompleteMessage({ setShowModal, message }) {
  return (
    <div className="overlayer">
      <p>YAY, course {message} successfully!</p>
      <button type="button" onClick={() => setShowModal(false)}>
        Close
      </button>
    </div>
  );
}
