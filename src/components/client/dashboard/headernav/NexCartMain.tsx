import NexProductList from '@components/client/dashboard/center/product/NexProductList.tsx'
import {useCart} from '@hooks/usecart'

export default function NexCartMain() {
  const {
    data,
    addCart,
  } = useCart()

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <NexProductList products={data} addCart={addCart} />
      </div> 
    </div>
  )
}