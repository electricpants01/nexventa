// import Product from '@components/client/dashboard/center/product/NexProductList.tsx'
// import Cart from '@components/client/dashboard/headernav/NEXCartProductList'
// import Header from '@components/client/dashboard/headernav/NexCart'
// import { useCart } from '@hooks/usecart'
//
// function App() {
//   const {
//     data,
//     cart,
//     addCart,
//     removeFromCart,
//     decreaseQuantity,
//     increaseQuantity,
//     clearCart,
//     isEmpty,
//     cartTotal
//   } = useCart()
//
//   return (
//     <>
//       <Header
//         cart={cart}
//         removeFromCart={removeFromCart}
//         decreaseQuantity={decreaseQuantity}
//         increaseQuantity={increaseQuantity}
//         clearCart={clearCart}
//         isEmpty={isEmpty}
//         cartTotal={cartTotal}
//       />
//
//       <Cart
//         cart={cart}
//         removeFromCart={removeFromCart}
//         decreaseQuantity={decreaseQuantity}
//         increaseQuantity={increaseQuantity}
//         clearCart={clearCart}
//         isEmpty={isEmpty}
//         cartTotal={cartTotal}
//       />
//
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
//           {data.map((product) => (
//             <Product
//               key={product.id}
//               product={product}
//               addCart={addCart}
//             />
//           ))}
//         </div>
//     </>
//   )
// }
//
// export default App
