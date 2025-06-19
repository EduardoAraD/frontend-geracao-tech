import type { ItemCart } from "../../Model/ItemCart";
import { CARTLOCALSTORAGE } from "./dataStorage";


export function saveCartLocalStorage(items: ItemCart[]) {
  localStorage.setItem(CARTLOCALSTORAGE, JSON.stringify(items));
}

export function getCartLocalStorage() {
  const response = localStorage.getItem(CARTLOCALSTORAGE);
  if(response !== null) {
    const cart: ItemCart[] = JSON.parse(response);

    return cart;
  }

  return [];
}

export function removeCartLocalStorage() {
  localStorage.removeItem(CARTLOCALSTORAGE);
}
