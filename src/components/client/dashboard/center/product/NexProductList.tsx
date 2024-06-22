import type { Product } from '@interfaces/Product'
type ProductProps = {
  product: Product
  addCart: (item: Product) => void
}

export default function Product({ product, addCart }: ProductProps) {
  const {name, img, short_description,long_description,price,discount} = product;
  const handleAddToCart = () => {
    addCart(product)
    // alert(`${name} añadido al carrito`)
  }

  return (
      <div className="relative mx-auto min-h-80 max-w-[200px] cursor-pointer rounded-md border duration-200 hover:shadow-xl dark:border-0">
        <span className="absolute right-0 top-0 rounded-bl-md bg-orange-600 px-2 py-1 text-xs text-white md:text-sm">
          <p>{discount} %</p>
        </span>
        <div className="overflow-hidden rounded-md">
          <img src={img} alt={name} className="blog-banner w-full" />
        </div>
        <div className="px-2">
          <h5 className="text-center text-base font-semibold">{name}</h5>
          <p className="text-center">
            <span className="border-b-1 border-orange-600 text-xl font-semibold text-orange-600 hover:border-black hover:text-black">
              Precio: {price} Bs
            </span>
          </p>
          <p className="my-2 text-center text-xs">{short_description}</p>
            <p className="my-2 text-center text-xs">{long_description}</p>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={handleAddToCart}
              className="add-to-cart-btn-add flex items-center rounded border-2 border-black bg-orange-600 px-3 py-1 text-xs text-white transition duration-300 hover:bg-black hover:text-white md:text-sm"
            >
              Añadir <i className="bx bxs-cart-add ml-1" />
            </button>
            <button
              data-modal-target="modalshowproduct"
              data-modal-toggle="modalshowproduct"
              className="flex items-center rounded border-2 border-black bg-black px-3 py-1 text-xs text-white transition duration-300 hover:bg-orange-600 hover:text-white md:text-sm"
            >Ver <i className="bx bxs-show ml-1" />
            </button>          
          </div>
        </div>
      </div>    
  )
}
