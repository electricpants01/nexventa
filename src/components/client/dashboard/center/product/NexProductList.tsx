import product, { type Product } from '@interfaces/Product.ts'
import NexProduct from '@components/client/dashboard/center/product/NexProduct.tsx'

type ProductProps = {
  readonly products: readonly Product[];
  readonly addCart: (item: Product) => void;
}

export default function NexProductList({ products, addCart }: ProductProps) {
  return (
    <>
      {products.map((product) => {
        return <NexProduct key={product.id} product={product} addCart={() => addCart(product)} />
      })}
    </>
  )
}
