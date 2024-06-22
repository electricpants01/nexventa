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

export default function Cart({
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
          <div className="sidebar-img-box">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="sidebar-content-box">
            <div className="category-content-flex">
              <a href="/" className="category-btn">
                <h3 className="">{product.name}</h3>
              </a>
              <button
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
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
                className="category-item-amount-btn"
                onClick={() => decreaseQuantity(product.id)}
              >
                -
              </button>
              <input
                className="category-sidebar-select"
                type="number"
                name="cantidad"
                id="cantidad"
                value={product.quantity}
              />
              <button
                type="button"
                className="category-item-amount-btn"
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
