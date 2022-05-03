const localStorageKey = "userUID";

export function setLocalStorage(key, uid) {
  return localStorage.setItem(key, uid);
}

export function getLocalStorage(key) {
  return localStorage.getItem(key);
}

export function removeItem() {
  localStorage.removeItem(localStorageKey);
}
