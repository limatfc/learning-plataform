export default function ConfirmSignedIn({ setShowModal, message }) {
  return (
    <div>
      <div onClick={() => setShowModal(false)} className="backdrop"></div>
      <div className="overlayer">
        <h3>YAY, {message} successfully!</h3>
        <button
          className="secundary"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
