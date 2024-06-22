import product, {type Product} from '@interfaces/Product'
import NexProduct from "@components/client/dashboard/center/product/NexProduct.tsx";

type ProductProps = {
  products: Product[]
  addCart: (item: Product) => void
}

export default function NexProductList({products, addCart}: ProductProps) {

  return (
    <>
      {
        products.map((product) => {
          return (
            <NexProduct key={product.id} product={product} addCart={() => addCart(product)} />
          )
        })
      }
    </>
  )
}
