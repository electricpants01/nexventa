const cart = {
  id: '1',
  name: 'Pollo al horno',
  img: '../../../public/images/food/11.jpg',
  discount: '30%',
  detail: 'Cuarto de pollo .',
  price: '20.00',
  currency: 'Bs',
  longDetail: 'Pollo al horno con arroz, papa .......',
  shortDetail: 'Pollo al horno'
}
const NEXBranchOrderSideBarCart = () => {
  return (
    <div id="cart-items">
      <div className="category-item">
        <div className="sidebar-img-box">
          <img src={cart.img} alt={cart.name} className="sidebar-img-box-img" />
        </div>
        <div className="sidebar-content-box">
          <div className="category-content-flex">
            <a href="#" className="category-btn">
              <h3 className="">{cart.name}</h3>
            </a>
            <button
              data-modal-target="edit-modal"
              data-modal-toggle="edit-modal"
              className="font-mediumtext-black block text-center text-sm hover:text-orange-600 focus:outline-none"
              type="button"
            >
              <i className="bx bx-edit-alt"></i>
            </button>
            <button className="category-item-amount-1">
              <i className="bx bx-x"></i>
            </button>
          </div>
          <p className="sidebar-item-title-p">Detalle: {cart.detail}</p>
          <div className="category-content-flex">
            <button className="category-item-amount-btn">-</button>
            <input
              className="category-sidebar-select"
              type="number"
              name="cantidad"
              id="cantidad"
            />
            <button className="category-item-amount-btn">+</button>
          </div>
          <div className="category-content-flex">
            <h3 className="sidebar-item-title-p">Precio:</h3>
            <p className="category-item-amount">{cart.price} {cart.currency} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NEXBranchOrderSideBarCart
