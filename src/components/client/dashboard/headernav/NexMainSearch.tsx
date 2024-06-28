// Importaciones organizadas con alias cortos
import React from 'react';
import NEXHeaderSearch from '@components/client/dashboard/headernav/NEXHeaderSearch';
import NEXHeaderLogo from '@components/client/dashboard/headernav/NEXHeaderLogo.tsx';
import NEXHeaderUser from '@components/client/dashboard/headernav/NEXHeaderUser';
import NexHeaderCart from '@components/client/dashboard/headernav/NexHeaderCart.tsx';
import NEXHeaderMobile from '@components/client/dashboard/headernav/NEXHeaderMobile';
import { CartProvider } from '@hooks/usecart.tsx';
import NexCartMain from '@components/client/dashboard/headernav/NexCartMain.tsx';
import NexHeaderProductList from '@components/client/dashboard/headernav/NexHeaderProductList.tsx';


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
            <NEXHeaderUser />
          </div>
        </div>
        <NEXHeaderMobile />
      </header>
    </CartProvider>
  );
}
