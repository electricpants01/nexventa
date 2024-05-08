import React from 'react'

const productedit = {
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

const NEXBranchOrderSideBarUserCreate = () => {
  return (
    <div>
      {/* Main modal */}
      <div
        id="edit-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
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
                Editar Producto
              </h3>
              <button
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
                data-modal-toggle="edit-modal"
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
                      src={productedit.img}
                      alt={productedit.name}
                      className="w-full border border-gray-300"
                    />
                  </div>
                  <div className="w-1/2 pl-4">
                    <label
                      htmlFor="id"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <b>Id:</b>
                    </label>
                    <input
                      id="id"
                      name="id"
                      type="text"
                      value={productedit.id}
                      className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <b>Nombre:</b>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={productedit.name}
                      className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <b>Precio:</b>
                    </label>
                    <input
                      id="price"
                      name="price"
                      type="text"
                      value={productedit.price}
                      className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <label
                      htmlFor="discount"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <b>Descuento:</b>
                    </label>
                    <input
                      id="discount"
                      name="discount"
                      type="text"
                      value={productedit.discount}
                      className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <label
                      htmlFor="detail"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <b>Detalle:</b>
                    </label>
                    <input
                      id="detail"
                      name="detail"
                      type="text"
                      value={productedit.shortDetail}
                      className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <label
                      htmlFor="longDetail"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <b>Descripción:</b>
                    </label>
                    <input
                      id="detail"
                      name="detail"
                      type="text"
                      value={productedit.longDetail}
                      className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <button className="banner-btn"> Guardar Cambios</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NEXBranchOrderSideBarUserCreate
