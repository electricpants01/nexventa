import NEXHeaderSearch from '@components/client/dashboard/headernav/NexHeadernavSearch'
import NEXHeaderLogo from '@components/client/dashboard/headernav/NexHeadernavLogo'
import NexHeadernavUser from '@components/client/dashboard/headernav/NexHeadernavUser'
import NexHeaderCart from '@components/client/dashboard/headernav/NexHeaderCart.tsx'
import NexHeadernavMobile from '@components/client/dashboard/headernav/NexHeadernavMobile'
import { CartProvider } from '@hooks/usecart.tsx'
import NexCartMain from '@components/client/dashboard/headernav/NexCartMain.tsx'
import NexHeaderProductList from '@components/client/dashboard/headernav/NexHeaderProductList.tsx'


export default function NexMainSearch() {
  return (
    <CartProvider>
      <header>
        <div className="header-main">
          <div className="container">
            <NEXHeaderLogo />
            <NEXHeaderSearch />
            <NexHeaderCart />
            <NexHeaderProductList />
            <NexCartMain />
            <NexHeadernavUser />
          </div>
        </div>
        <NexHeadernavMobile />
      </header>
    </CartProvider>
  );
}
