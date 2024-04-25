const cart  = {
  name: 'cart ',
  img: '../../../public/images/banner/banner.jpg',
  title: '30% Off',
  subtitle: 'Comida de fitness',
  subtitle2: 'a partir de',
  subtitle3: '20.00',
  subtitle4: 'Bs'
}

const NEXcart = () => {
  return (
    <div id="cart-items">
    <div className="category-item">
      <div className="sidebar-img-box">
        <img src={cart .img} alt={cart .name} className="sidebar-img-box-img" />
      </div>
      <div className="sidebar-content-box">
        <div className="category-content-flex">
          <a href="#" className="category-btn">
            <h3 className="">Burger Mozza XL</h3>
          </a>
          <button className="category-item-amount-1" id="openModalBtn-edit">
            <i className="bx bx-edit-alt"></i>
          </button>
          <button className="category-item-amount-1">
            <i className="bx bx-x"></i>
          </button>
        </div>
        <p className="sidebar-item-title-p">Detalle:</p>
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
          <p className="category-item-amount">10.00 Bs</p>
        </div>
        <p className="category-item-amount">Bs</p>
      </div>
    </div>
    </div>
  )
}

export default NEXcart 
