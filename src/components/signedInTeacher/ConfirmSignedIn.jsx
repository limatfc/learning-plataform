export default function ConfirmSignedIn({ setShowModal, message }) {
  return (
    <div className="overlayer">
      <p>YAY, course {message} successfully!</p>
      <button type="button" onClick={() => setShowModal(false)}>
        Close
      </button>
    </div>
  );
}
