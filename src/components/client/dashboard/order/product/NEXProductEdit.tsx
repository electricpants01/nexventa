import React from 'react'

const productedit = {
  id: '1',
  name: 'Pollo al horno',
  img: '../../../public/images/food/11.jpg',
  discount: '30%',
  detail: 'Cuarto de pollo .',
  price: '20.00',
  currency: 'Bs',
  longDetail: 'Pollo al horno con arroz, papa .............................................................',
  shortDetail: 'Pollo al horno',
  amount: '1',
  gloss: 'Con arroz'
}

const NEXOrderSideBarProductEdit = () => {
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
              <h3 className="text-center text-lg font-semibold text-white">Editar Producto</h3>
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
                      className="w-full rounded-md border border-gray-200"
                    />
                  </div>
                  <div className="w-1/2 pl-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <i className="bx bxs-food-menu mr-2"></i>
                      <b>Nombre:</b> {productedit.name}
                    </label>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <i className="bx bx-dollar mr-2"></i>
                      <b>Precio:</b> {productedit.price} {productedit.currency}
                    </label>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <i className="bx bx-discount mr-2"></i>
                      <b>Descuento:</b> {productedit.discount}
                    </label>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <i className="bx bx-info-circle mr-2"></i>
                      <b>Descripción Corta:</b> {productedit.shortDetail}
                    </label>
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <i className="bx bx-detail mr-2"></i>
                        <b>Descripción Larga:</b> {productedit.longDetail}
                      </label>
                      <br />
                      <label
                        htmlFor="detail"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <i className="bx bx-info-circle mr-2"></i>
                        <b>Cantidad:</b>
                      </label>
                      <div className="relative mb-2 flex items-center">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="bedrooms-input"
                          className="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                          <svg
                            className="h-3 w-3 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="bedrooms-input"
                          data-input-counter
                          data-input-counter-min="1"
                          data-input-counter-max="5"
                          className="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 pb-6 text-center text-sm font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder=""
                          value={productedit.amount}
                          required
                        />
                        <div className="absolute bottom-1 start-1/2 flex -translate-x-1/2 items-center space-x-1 text-xs text-gray-400 rtl:translate-x-1/2 rtl:space-x-reverse">
                          <span>Unidad</span>
                        </div>
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="bedrooms-input"
                          className="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                          <svg
                            className="h-3 w-3 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>

                      <label
                        htmlFor="longDetail"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <i className="bx bx-detail mr-2"></i>
                        <b>Glosa:</b>
                      </label>
                      <input
                        id="longDetail"
                        name="longDetail"
                        type="text"
                        value={productedit.gloss}
                        className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="block w-full rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
                  type="submit"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NEXOrderSideBarProductEdit
