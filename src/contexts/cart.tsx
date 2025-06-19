import { createContext, useEffect, useState, type ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid';

import type { ItemCart } from "../Model/ItemCart";
import type { Product } from "../Model/Product";
import { getCartLocalStorage, removeCartLocalStorage, saveCartLocalStorage } from "../lib/localStorage/cart";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  items: ItemCart[];
  addProduct: (itemCart: { product: Product, quantity: number, color: string, size: string }) => void;
  removeProduct: (idItemCart: string) => void;
  updateQuantityProduct: ({ quantity, id }: { quantity: number, id: string }) => void;
  emptyCart: () => void;
}

const CartContext = createContext({} as CartContextProps);

function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<ItemCart[]>([])

  function addProduct({ product, quantity, color, size }: { product: Product, quantity: number, color: string, size: string }) {
    const newItemCart: ItemCart = {
      id: uuidv4(),
      product,
      quantity,
      color,
      size
    }

    const newList = [ ...items, newItemCart ];

    setItems(newList)
    saveCartLocalStorage(newList);
  }

  function removeProduct(idItemCart: string) {
    const newList = items.filter( item => item.id !== idItemCart );

    setItems(newList);
    saveCartLocalStorage(newList);
  }

  function updateQuantityProduct({ quantity, id }: { quantity: number, id: string }) {
    const newList = items.map(item => item.id === id ? ({ ...item, quantity }) : item);

    setItems(newList);
    saveCartLocalStorage(newList);
  }

  function emptyCart() {
    setItems([]);
    removeCartLocalStorage();
  }

  function loadStorage() {
    const itemsCart = getCartLocalStorage();
    setItems(itemsCart);
  }

  useEffect(() => {
    loadStorage();
  }, [])

  return (
    <CartContext.Provider
      value={{
        items,
        addProduct,
        removeProduct,
        updateQuantityProduct,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }