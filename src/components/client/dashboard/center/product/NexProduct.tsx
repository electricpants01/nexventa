import { type Product } from '@interfaces/Product'

type NexProductProps = {
  product: Product
  addCart: () => void
}

export default function NexProduct({ product, addCart }: NexProductProps) {
  const { name, img, short_description, long_description, price, discount } = product
  return (
    <div className="relative mx-auto w-full cursor-pointer rounded-md border duration-200 hover:shadow-xl sm:max-w-[200px]">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={name}
          className="blog-banner w-full rounded-md shadow-md hover:shadow-lg"
        />
        <span className="absolute right-0 top-0 rounded-bl-md bg-orange-600 px-2 py-1 text-xs text-white md:text-sm">
          <p>{discount} %</p>
        </span>
      </div>
      <div className="px-1">
        <h5 className="border-b-1 text-1xl text-center font-semibold text-orange-600 ">{name}</h5>
        <p className="text-center">
          <span className="border-b-1 border-orange-600 text-xl font-semibold text-orange-600 hover:border-black hover:text-black">
            {price} Bs
          </span>
        </p>
        <p className="text-center text-sm font-semibold text-gray-800">{short_description}</p>
        <p className="my-1 text-center text-xs text-gray-700">{long_description}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <button
            onClick={addCart}
            className="add-to-cart-btn-add flex items-center rounded border-2 border-black bg-orange-600 px-3 py-1 text-xs text-white transition duration-300 hover:bg-black hover:text-white md:text-sm"
          >
            Añadir <i className="bx bxs-cart-add ml-1" />
          </button>
          <button
            data-modal-target="modalshowproduct"
            data-modal-toggle="modalshowproduct"
            className="flex items-center rounded border-2 border-black bg-black px-3 py-1 text-xs text-white transition duration-300 hover:bg-orange-600 hover:text-white md:text-sm"
          >
            Ver <i className="bx bxs-show ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}
