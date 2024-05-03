import React from 'react'

const productShow = {
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

const NEXBranchOrderSideBarProductShow: React.FC = () => {
  return (
    <div>
      {/* Main modal */}
      <div
        id="crud-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-screen w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
      >
        <div className="relative max-h-full w-full max-w-3xl p-4">
          {/* Modal content */}
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            {/* Modal header */}
            <div
              className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600"
              style={{ background: 'linear-gradient(135deg, #ff5c28, #da3805)' }}
            >
              <h3 className="text-lg font-semibold" style={{ textAlign: 'center', color: 'white' }}>
                Detalle del Producto
              </h3>
              <button
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm text-white
                  hover:bg-orange-600 focus:outline-none 
                  focus:ring-4 focus:ring-orange-300"
                data-modal-toggle="crud-modal"
              >
                <i className="bx bx-x"></i>
                <span className="sr-only">Close</span>
              </button>
            </div>
            {/* Modal body */}
            <form className="p-4 md:p-5">
              <div className="mb-4 grid gap-4">
                <div className="flex items-center">
                  <div className="w-1/2">
                    <img
                      src={productShow.img}
                      alt={productShow.name}
                      className="w-full border border-gray-500"
                    />
                  </div>
                  <div className="w-1/2 pl-4">
                    <label
                      htmlFor="id"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <i className="bx bx-id-card"></i> <b>Id:</b> {productShow.id}
                    </label>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <i className="bx bx-font"></i> <b>Nombre:</b> {productShow.name}
                    </label>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <i className="bx bx-dollar"></i> <b>Precio:</b> {productShow.price}{' '}
                      {productShow.currency}
                    </label>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <i className="bx bx-discount"></i> <b>Descuento:</b> {productShow.discount}
                    </label>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <i className="bx bx-info-circle"></i> <b>Detalle:</b>{' '}
                      {productShow.shortDetail}
                    </label>
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <i className="bx bx-detail"></i> <b>Descripción:</b>{' '}
                        {productShow.longDetail}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NEXBranchOrderSideBarProductShow
