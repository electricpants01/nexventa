import {CartProvider} from "@hooks/usecart.tsx";
import NexHeaderProductList from "@components/client/dashboard/headernav/NexHeaderProductList.tsx";

export default function NexMainOrderCartList() {
  return (
    <CartProvider>
      <NexHeaderProductList/>
    </CartProvider>
  )
}