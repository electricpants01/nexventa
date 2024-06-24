// Importaciones organizadas con alias cortos
import React from 'react'
import NEXHeaderSearch from '@components/client/dashboard/headernav/NEXHeaderSearch'
import NEXHeaderLogo from '@components/client/dashboard/headernav/NEXHeaderLogo.tsx'
import NEXHeaderUser from '@components/client/dashboard/headernav/NEXUser.tsx'
import NexHeaderCart from '@components/client/dashboard/headernav/NexHeaderCart.tsx'
import NEXHeaderMobile from '@components/client/dashboard/headernav/NEXMobile.tsx'
import { CartProvider } from '@hooks/usecart.tsx'
import NexCartMain from '@components/client/dashboard/headernav/NexCartMain.tsx'
import NexHeaderProductList from '@components/client/dashboard/headernav/NexHeaderProductList.tsx'
import './NexMainProductCartList.css'
import NEXUserSeller from './user/NEXUserSeller.tsx'
import NEXCategorylist from './cart/NEXCategoryList.tsx'

export default function NexMainSearch() {
  return (
    <CartProvider>
      <header>
        <div className="header-main">
          <div className="container">{/* <NexHeaderCart />  */}</div>
        </div>
        <NEXHeaderMobile />
      </header>
      <div className="product-container">
        <div className="container mx-auto">
          <NexCartMain />
          <div className="sidebar has-scrollbar-cart" data-mobile-menu>
            <NEXUserSeller />
            <NexHeaderProductList />
            <NEXCategorylist />
          </div>
        </div>
      </div>
    </CartProvider>
  )
}
