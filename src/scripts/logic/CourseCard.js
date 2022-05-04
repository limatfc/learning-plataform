export function checkedActions(setError, setStatus) {
  setError(true);
  setStatus(2);
}

export function notCheckedActions(setShowModal, setStatus) {
  setShowModal(true);
  setStatus(1);
}
