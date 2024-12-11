'use client'

import { createContext, useContext, useState } from 'react'

interface CartItem {
  productId: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: string) => void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCart] = useState<CartItem[]>([])

  function addToCart(productId: string) {
    setCart((state) => {
      const item = state.find((item) => item.productId === productId)

      if (item) {
        return state.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...state, { productId, quantity: 1 }]
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
