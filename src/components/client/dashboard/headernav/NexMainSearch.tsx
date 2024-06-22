import NEXHeaderSearch from "@components/client/dashboard/headernav/NEXSearch.tsx";
import React from "react";
import NEXHeaderUser from "@components/client/dashboard/headernav/NEXUser.tsx";
import NexHeaderCart from "@components/client/dashboard/headernav/NexHeaderCart.tsx";
import NEXHeaderMobile from "@components/client/dashboard/headernav/NEXMobile.tsx";
import {CartProvider} from "@hooks/usecart.tsx";
import NexCartMain from "@components/client/dashboard/headernav/NexCartMain.tsx";




export default function NexMainSearch() {
  return (
    <CartProvider>
      <header>
        <div className="header-main">
          <div className="container">
            {/*<NEXHeaderLogo/>*/}
            <NEXHeaderSearch/>
            <NexHeaderCart/>
            <NexCartMain/>
            <NEXHeaderUser/>
          </div>
        </div>
        <NEXHeaderMobile/>
      </header>
    </CartProvider>
  )
}