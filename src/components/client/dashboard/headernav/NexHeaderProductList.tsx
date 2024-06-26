import Header from '@components/client/dashboard/headernav/NEXCartProductList.tsx'
import { useCart } from '@hooks/usecart'

export default function NexHeaderProductList() {
  const {
    data,
    cart,
    addCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  } = useCart()

  return (
    <Header
      cart={cart}
      removeFromCart={removeFromCart}
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
      clearCart={clearCart}
      isEmpty={isEmpty}
      cartTotal={cartTotal}
    />
  )
}
