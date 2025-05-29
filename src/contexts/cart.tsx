import { createContext, useState, type ReactNode } from "react";

import type { ItemCart } from "../Model/ItemCart";
import type { Product } from "../Model/Product";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  items: ItemCart[];
  addProduct: ({ product, quantity }: { product: Product, quantity: number }) => void;
  removeProduct: (idItemCart: string) => void;
  updateQuantityProduct: ({ quantity, id }: { quantity: number, id: string }) => void;
  emptyCart: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<ItemCart[]>([])

  function addProduct({ product, quantity }: { product: Product, quantity: number }) {
    const newItemCart: ItemCart = {
      id: '',
      product,
      quantity,
    }

    setItems(state => [ ...state, newItemCart ])
  }

  function removeProduct(idItemCart: string) {
    setItems(state => state.filter( item => item.id !== idItemCart ));
  }

  function updateQuantityProduct({ quantity, id }: { quantity: number, id: string }) {
    setItems(state => state.map(item => item.id === id ? ({ ...item, quantity }) : item))
  }

  function emptyCart() {
    setItems([]);
  }

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
