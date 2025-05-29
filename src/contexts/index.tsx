import type { ReactNode } from "react"

import { CartProvider } from "./cart"

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
}
