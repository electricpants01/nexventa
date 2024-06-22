import type { CartItem, Product } from '@interfaces/Product'
type HeaderProps = {
  cart: CartItem[]
  removeFromCart: (id: Product['id']) => void
  decreaseQuantity: (id: Product['id']) => void
  increaseQuantity: (id: Product['id']) => void
  clearCart: () => void
  isEmpty: boolean
  cartTotal: number
}

export default function Header({
  cart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
  isEmpty,
  cartTotal
}: HeaderProps) {
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
            {' '}
            {cart.length}
          </span>
        </button>
        <div id="Cart" className="z-10 hidden divide-y divide-gray-100 rounded-lg bg-white">
          <ul className="py-2 text-sm text-black" aria-labelledby="CartButton">
            <li>
              <div>
                {isEmpty ? (
                  <p className="w-full text-center">El carrito esta vacio</p>
                ) : (
                  <>
                    <table className="w-full text-left">
                      <thead>
                        <tr>
                          <th className="px-2 py-1">Imagen</th>
                          <th className="px-2 py-1">Nombre</th>
                          <th className="px-2 py-1">Precio</th>
                          <th className="px-2 py-1">Cantidad</th>
                          <th className="px-2 py-1"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((product) => (
                          <tr key={product.id}>
                            <td className="px-2 py-1">
                              <img
                                className="h-10 w-10 rounded-md"
                                src={product.img}
                                alt={product.name}
                              />
                            </td>
                            <td className="px-2 py-1">{product.name}</td>
                            <td className="px-2 py-1">Bs. {product.price}</td>
                            <td className="flex items-center px-2 py-1">
                              <button
                                type="button"
                                className="rounded-full bg-gray-200 p-1 hover:bg-gray-300"
                                onClick={() => decreaseQuantity(product.id)}
                              >
                                -
                              </button>
                              <span className="px-2">{product.quantity}</span>
                              <button
                                type="button"
                                className="rounded-full bg-gray-200 p-1 hover:bg-gray-300"
                                onClick={() => increaseQuantity(product.id)}
                              >
                                +
                              </button>
                            </td>
                            <td className="px-2 py-1">
                              <button
                                className="rounded-full bg-red-600 p-1 text-white hover:bg-red-700"
                                type="button"
                                onClick={() => removeFromCart(product.id)}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="p-4 text-right">
                      Total a pagar: <span className="font-bold">Bs {cartTotal}</span>
                    </p>
                  </>
                )}
              </div>
            </li>
            <button
              className="w-full rounded-md bg-black p-2 text-white hover:bg-orange-600"
              onClick={clearCart}
            >
              Vaciar Carrito
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}
