
import { TOKENLOCALSTORAGE } from "./dataStorage";

export function saveTokenLocalStorage(token: string) {
  localStorage.setItem(TOKENLOCALSTORAGE, token);
}

export function getTokenLocalStorage() {
  return localStorage.getItem(TOKENLOCALSTORAGE);
}

export function removeTokenLocalStorage() {
  return localStorage.removeItem(TOKENLOCALSTORAGE);
}
