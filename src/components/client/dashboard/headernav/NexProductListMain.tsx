import NexProductList from '@components/client/dashboard/center/product/NexProductList.tsx'
import NEXCartProductList from '@components/client/dashboard/headernav/NEXCartProductList'
import Header from '@components/client/dashboard/headernav/NexCart'
import { useCart } from '@hooks/usecart'

export default function NexProductListMain() {
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
    <>
      {/*<Header*/}
      {/*  cart={cart}*/}
      {/*  removeFromCart={removeFromCart}*/}
      {/*  decreaseQuantity={decreaseQuantity}*/}
      {/*  increaseQuantity={increaseQuantity}*/}
      {/*  clearCart={clearCart}*/}
      {/*  isEmpty={isEmpty}*/}
      {/*  cartTotal={cartTotal}*/}
      {/*/>*/}

      {/* <NEXCartProductList
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      /> */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <NexProductList products={data} addCart={addCart} />
      </div>
    </>
  )
}
