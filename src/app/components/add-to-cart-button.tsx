'use client'

import { useCart } from '@/contexts/cart-context'

interface AddToCartButtonProps {
  id: string
}

export function AddToCartButton({ id }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  return (
    <button
      type="button"
      onClick={() => addToCart(id)}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-600/50 font-semibold text-white"
    >
      Add to cart
    </button>
  )
}
