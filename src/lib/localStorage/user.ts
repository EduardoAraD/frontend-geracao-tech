import type { User } from "../../Model/User";
import { USERLOCALSTORAGE } from "./dataStorage";

export function saveUserLocalStorage(user: User) {
  localStorage.setItem(USERLOCALSTORAGE, JSON.stringify(user));
}

export function getUserLocalStorage() {
  const response = localStorage.getItem(USERLOCALSTORAGE);
  if(response !== null) {
    const user: User = JSON.parse(response);

    return user;
  }

  return null;
}

export function removeUserLocalStorage() {
  localStorage.removeItem(USERLOCALSTORAGE);
}
