import { createContext, useState, type ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid';

import type { ItemCart } from "../Model/ItemCart";
import type { Product } from "../Model/Product";

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

    setItems(state => [ ...state, newItemCart ])
  }

  function removeProduct(idItemCart: string) {
    setItems(state => state.filter( item => item.id !== idItemCart ));
  }

  function updateQuantityProduct({ quantity, id }: { quantity: number, id: string }) {
    setItems(state => state.map(item => item.id === id ? ({ ...item, quantity }) : item));
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

export { CartProvider, CartContext }