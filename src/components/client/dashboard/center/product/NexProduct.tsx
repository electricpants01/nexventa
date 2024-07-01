import { type Product } from '@interfaces/Product'

type NexProductProps = {
  product: Readonly<Product>
  addCart: () => void
}

const NexProduct = ({ product, addCart }: NexProductProps) => {
  const { name, img, short_description, long_description, price, discount } = product

  return (
    <div className="relative mx-auto w-full cursor-pointer rounded-md border duration-200 hover:shadow-xl sm:max-w-[200px]">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={name}
          className="blog-banner w-full rounded-md shadow-md transition duration-300 hover:opacity-75"
        />
        <span className="absolute right-0 top-0 rounded-bl-md bg-orange-600 px-2 py-1 text-xs text-white md:text-sm">
          <p>{discount} %</p>
        </span>
        <button
          data-modal-target="modal-show-product"
          data-modal-toggle="modal-show-product"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border-2 px-5 py-3 text-xs text-white transition duration-300 md:text-sm"
        >
          <i className="bx bxs-show ml-1" />
        </button>
      </div>

      <div className="px-3 py-2">
        <h5 className="text-center text-xl font-semibold text-orange-600 border-b border-orange-600 pb-1">
          {name.slice(0, 15)}
        </h5>
        <p className="text-center mt-2">
          <span className="text-xl font-semibold text-orange-600 border-b hover:border-black hover:text-black">
            {price} Bs
          </span>
        </p>
        <p className="text-center text-xs font-semibold text-gray-800 mt-2">
          {short_description.slice(0, 50)}..
        </p>
        <p className="my-1 text-center text-xs text-gray-700">
          {long_description.slice(0, 50)}...
        </p>
        <div className="mt-4 flex justify-center">
          <button
            onClick={addCart}
            className="flex items-center justify-center rounded-full border-2 border-black bg-orange-600 w-10 h-10 text-white text-lg transition duration-300 hover:bg-black hover:text-white"
          >
            <i className='bx bx-plus'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NexProduct
