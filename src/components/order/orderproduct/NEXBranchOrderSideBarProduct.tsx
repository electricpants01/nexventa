import React from 'react'

const NEXBranchOrderSideBarProduct = () => {
  const data = [
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    },
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    },
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    },
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    },
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    },
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    },
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    },
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    },
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    },
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    },
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    },
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    },
    {
      name: 'Pollo',
      img: '../../../public/images/food/11.jpg',
      precio: '27 Bs',
      descuento: '30.00 Bs',
      detalle: 'Pollo al horno'
    }
  ]

  return (
    <div className="container-0">
      <div className="blog-container-0 has-scrollbar">
        {data.map((product, index) => (
          <div className="blog-card" key={index}>
            <img src={product.img} alt={product.name} className="blog-banner" />
            <div className="blog-content">
              <h3 className="blog-title">{product.name}</h3>
              <div className="price-box">
                <p className="price">Precio: {product.precio}</p>
                <del>{product.descuento}</del>
              </div>
              <a href="#" className="showcase-title">
                {product.detalle}
              </a>
              <div className="banner-btn-product">
                <button className="add-to-cart-btn-add" data-name={product.name} data-price="20">
                  <i className="bx bxs-cart-add"></i>
                  Añadir
                </button>
                {/* Modal */}
                <button
                  data-modal-target="crud-modal"
                  data-modal-toggle="crud-modal"
                  className="block rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-500 focus:outline-none"
                  type="button"
                >
                  <i className="bx bxs-show"></i>
                  Ver
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NEXBranchOrderSideBarProduct
