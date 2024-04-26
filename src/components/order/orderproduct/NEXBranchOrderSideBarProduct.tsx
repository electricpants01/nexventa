const product = {
  name: 'Pollo',
  img: '../../../public/images/food/11.jpg',
  precio: '27 Bs',
  descuento: '30.00 Bs',
  detalle: ' Pollo al horno',
}
const NEXBranchOrderSideBarProduct = () => {
  return (
    <div className="blog-card">
      <img src={product.img} alt={product.name} className="blog-banner" />
      {/* <p className="showcase-badge angle">stop</p> */}
      <div className="blog-content">
        <h3 className="blog-title">{product.name}</h3>
        <div className="price-box">
          <p className="price">Precio: {product.precio}</p>
          <del>{product.descuento}</del>
        </div>
        <a href="#" className="showcase-title">
          {' '}
          {product.detalle}
        </a>
        <div className="banner-btn-product">
          <button className="add-to-cart-btn-add" data-name="Milaneza" data-price="20">
            <i className="bx bxs-cart-add"></i>
            Añadir
          </button>
          <button id="openModalBtn-ver" className="add-to-cart-btn-show">
            <i className="bx bxs-show"></i> Ver
          </button>
        </div>
      </div>
    </div>
  )
}

export default NEXBranchOrderSideBarProduct
