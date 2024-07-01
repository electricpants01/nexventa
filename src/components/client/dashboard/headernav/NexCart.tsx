import type { CartItem, Product } from '@interfaces/Product'

type NexCartProps = Readonly<{
  cart: CartItem[]
  removeFromCart: (id: Product['id']) => void
  decreaseQuantity: (id: Product['id']) => void
  increaseQuantity: (id: Product['id']) => void
  clearCart: () => void
  isEmpty: boolean
  cartTotal: number
}>

export default function NexCart({
  cart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
  isEmpty,
  cartTotal
}: NexCartProps) {
  return (
    <div className="relative">
      <div className="flex items-center space-x-4">
        <button
          id="CartButton"
          data-dropdown-toggle="Cart"
          data-dropdown-delay="500"
          data-dropdown-trigger="hover"
          className="relative rounded-full bg-gray-200 p-2 hover:bg-orange-600"
          type="button"
        >
          <i className="bx bx-cart bx-sm"></i>
          <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
            {cart.length}
          </span>
        </button>
      </div>
    </div>
  )
}
