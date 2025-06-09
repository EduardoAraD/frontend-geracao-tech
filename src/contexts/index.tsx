import type { ReactNode } from "react"

import { CartProvider } from "./cart"
import { UserProvider } from "./auth"

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </UserProvider>
  )
}
