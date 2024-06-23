import {CartProvider} from "@hooks/usecart.tsx";
import NexCartMain from "@components/client/dashboard/headernav/NexCartMain.tsx";

export default function NexMainproductCart() {
  return (
    <CartProvider>
            <NexCartMain/>
    </CartProvider>
  )
}