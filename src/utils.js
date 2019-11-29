export const API = "http://jsonplaceholder.typicode.com/users";

export function saveToStorage(name, val) {
  localStorage.setItem(name, val);
}
export function getFromStorage(name) {
  if (localStorage.getItem(name)) {
    return localStorage.getItem(name);
  } else {
    return false;
  }
}
