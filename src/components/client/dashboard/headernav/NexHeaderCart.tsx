import Cart from '@components/client/dashboard/headernav/NexCart'
import {useCart} from '@hooks/usecart'


export default function NexHeaderCart() {
  const {
    cart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  } = useCart()

  return (
    <Cart
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