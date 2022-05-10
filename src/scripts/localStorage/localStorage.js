const localStorageKey = "userUID";

// Hey! nice idea!!!
export function setLocalStorage(uid) {
  return localStorage.setItem(localStorageKey, uid);
}

export function getLocalStorage() {
  return localStorage.getItem(localStorageKey);
}

export function removeItem() {
  localStorage.removeItem(localStorageKey);
}
