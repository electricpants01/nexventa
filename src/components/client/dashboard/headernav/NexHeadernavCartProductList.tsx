import type { CartItem, Product } from '@interfaces/Product'

type HeaderProps = Readonly<{
  cart: CartItem[]
  removeFromCart: (id: Product['id']) => void
  decreaseQuantity: (id: Product['id']) => void
  increaseQuantity: (id: Product['id']) => void
  clearCart: () => void
  isEmpty: boolean
  cartTotal: number
}>

export default function NexHeadernavCartProductList({
  cart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
  isEmpty,
  cartTotal
}: HeaderProps) {
  return (
    <div>
      {cart.map((product) => (
        <div key={product.id} className="category-item">
          <div className="sidebar-img-box overflow-hidden">
            <img
              src={product.img}
              alt={product.name}
              className="h-14 w-14 rounded-full object-cover"
            />
          </div>
          <div className="sidebar-content-box">
            <div className="category-content-flex">
              <a href="/" className="category-btn">
                <h3 className="">{product.name}</h3>
              </a>
              <button
                data-modal-target="modal-edit-product"
                data-modal-toggle="modal-edit-product"
                className="font-mediumtext-black block text-center text-sm hover:text-orange-600 focus:outline-none"
                type="button"
              >
                <i className="bx bx-edit-alt"></i>
              </button>
              <button
                className="category-item-amount-1"
                type="button"
                onClick={() => removeFromCart(product.id)}
              >
                <i className="bx bx-x"></i>
              </button>
            </div>
            <p className="sidebar-item-title-p">Detalle: {product.short_description}</p>
            <div className="category-content-flex">
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-orange-600 px-4 py-2 text-sm text-white hover:bg-black focus:outline-none"
                onClick={() => decreaseQuantity(product.id)}
              >
                -
              </button>
              <input
                className="mx-2 w-12 text-center text-sm text-gray-900"
                type="number"
                name="cantidad"
                id="cantidad"
                value={product.quantity}
                readOnly
              />
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-orange-600 px-4 py-2 text-sm text-white hover:bg-black focus:outline-none"
                onClick={() => increaseQuantity(product.id)}
              >
                +
              </button>
            </div>
            <div className="category-content-flex">
              <h3 className="sidebar-item-title-p">Precio:</h3>
              <p className="category-item-amount">{product.price} Bs</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
