import NEXHeaderLogo from '@components/client/dashboard/headernav/NEXHeaderLogo.tsx'
import NEXHeaderSearch from '@components/client/dashboard/headernav/NEXHeaderSearch'
import NexHeaderCart from '@components/client/dashboard/headernav/NexHeaderCart.tsx'
import NEXHeaderUser from '@components/client/dashboard/headernav/NexHeadernavUser.tsx'
import NEXHeaderMobile from '@components/client/dashboard/headernav/NEXHeaderMobile.tsx'
import { CartProvider } from '@hooks/usecart.tsx'
import NexCartMain from '@components/client/dashboard/headernav/NexCartMain.tsx'
import NexHeaderProductList from '@components/client/dashboard/headernav/NexHeaderProductList.tsx'
import NEXUserSeller from './user/NEXUserSeller.tsx'
import NEXCategorylist from './cart/NEXCategoryList.tsx'
import NEXUserData from '@components/client/dashboard/order/user/NEXUserData.tsx'
import NEXCategory from '@components/client/dashboard/center/NexCenterCategory.tsx'
import NEXBanner from '@components/client/dashboard/center/NexCenterBanner.tsx'
import '@styles/client/NexMainProductCartList.css'

export default function NexMainSearch() {
  return (
    <CartProvider>
      <header>
        <div className="header-main">
          <div className="container">
            <NEXHeaderLogo />
            <NEXHeaderSearch />
            <NexHeaderCart />
            <NEXHeaderUser />
          </div>
        </div>
        <NEXHeaderMobile />
      </header>
      <div className="product-container">
        <NEXBanner />
        <NEXCategory />
        <div className="container mx-auto">
          <NexCartMain />
          <div className="sidebar has-scrollbar-cart" data-mobile-menu>
            <NEXUserSeller />
            <NexHeaderProductList />
            <NEXCategorylist />
            <NEXUserData />
          </div>
        </div>
      </div>
    </CartProvider>
  )
}
