import NexHeadernavLogo from '@components/client/dashboard/headernav/NexHeadernavLogo.tsx'
import NexHeadernavSearch from '@components/client/dashboard/headernav/NexHeadernavSearch.tsx'
import NexHeaderCart from '@components/client/dashboard/headernav/NexHeaderCart.tsx'
import NexHeadernavUser from '@components/client/dashboard/headernav/NexHeadernavUser.tsx'
import NexHeadernavMobile from '@components/client/dashboard/headernav/NexHeadernavMobile.tsx'
import { CartProvider } from '@hooks/usecart.tsx'
import NexCartMain from '@components/client/dashboard/headernav/NexCartMain.tsx'
import NexHeaderProductList from '@components/client/dashboard/headernav/NexHeaderProductList.tsx'
import NexUserSeller from './user/NexUserSeller.tsx'
import NexCategoryList from './cart/NexCategoryList.tsx'
import NexUserData from '@components/client/dashboard/order/user/NexUserData.tsx'
import NexCenterCategory from '@components/client/dashboard/center/NexCenterCategory.tsx'
import NexCenterBanner from '@components/client/dashboard/center/NexCenterBanner.tsx'
import '@styles/client/NexMainProductCartList.css'

export default function NexMainSearch() {
  return (
    <CartProvider>
      <header>
        <div className="header-main">
          <div className="container">
            <NexHeadernavLogo />
            <NexHeadernavSearch />
            <NexHeaderCart />
            <NexHeadernavUser />
          </div>
        </div>
        <NexHeadernavMobile />
      </header>
      <div className="product-container">
        <NexCenterBanner />
        <NexCenterCategory />
        <div className="container mx-auto">
          <NexCartMain />
          <div className="sidebar has-scrollbar-cart" data-mobile-menu>
            <NexUserSeller />
            <NexHeaderProductList />
            <NexCategoryList />
            <NexUserData />
          </div>
        </div>
      </div>
    </CartProvider>
  )
}
