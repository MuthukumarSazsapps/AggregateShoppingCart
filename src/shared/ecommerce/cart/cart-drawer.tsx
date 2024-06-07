// 'use client';

// import { useState } from 'react';
// // import dynamic from 'next/dynamic';
// import { useCart } from 'store/quick-cart/cart.context';
// import FloatingCartButton from 'components/point-of-sale/floating-cart-button';
// import CartDrawerView from './cart-drawer-view';
// // import { useParams, usePathname } from 'next/navigation';
// import { useLocation, useSearchParams } from 'react-router-dom';
// import { routes } from 'config/routes';
// import { Drawer } from 'rizzui';

// export default function CartDrawer() {
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const pathname = useLocation();
//   const params = useSearchParams();

//   // list of included pages
//   const includedPaths: any[] = [
//     routes.eCommerce.shop,
//     routes.eCommerce.productDetails(params?.slug as any),

//   ];

//   const isPathIncluded = includedPaths.some((path:any) => pathname === path);

//   const {
//     totalItems,
//     items,
//     removeItemFromCart,
//     clearItemFromCart,
//     total,
//     addItemToCart,
//   } = useCart();
//   return (
//     <>
//       {isPathIncluded ? (
//         <FloatingCartButton
//           onClick={() => setOpenDrawer(true)}
//           className="top-1/2 -translate-y-1/2 bg-primary text-gray-0 dark:bg-primary"
//           totalItems={totalItems}
//         />
//       ) : null}
//       <Drawer
//         isOpen={openDrawer ?? false}
//         onClose={() => setOpenDrawer(false)}
//         overlayClassName="dark:bg-opacity-60"
//         containerClassName="dark:bg-gray-100 max-w-md"
//       >
//         <CartDrawerView
//           setOpenDrawer={setOpenDrawer}
//           clearItemFromCart={clearItemFromCart}
//           removeItemFromCart={removeItemFromCart}
//           addItemToCart={addItemToCart}
//           items={items}
//           total={total}
//         />
//       </Drawer>
//     </>
//   );
// }

'use client';

import { useState } from 'react';
import { useCart } from 'store/quick-cart/cart.context';
import FloatingCartButton from 'components/point-of-sale/floating-cart-button';
import CartDrawerView from './cart-drawer-view';
import { useLocation, useSearchParams } from 'react-router-dom';
import { routes } from 'config/routes';
import { Drawer } from 'rizzui';

export default function CartDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Get the slug parameter from searchParams and provide a default value if null
  const slug = searchParams.get('slug') || '';

  // list of included pages
  const includedPaths: any[] = [routes.eCommerce.shop, routes.eCommerce.productDetails(slug)];

  const isPathIncluded = includedPaths.some((path: any) => location.pathname === path);

  const { totalItems, items, removeItemFromCart, clearItemFromCart, total, addItemToCart } =
    useCart();

  return (
    <>
      {isPathIncluded ? (
        <FloatingCartButton
          onClick={() => setOpenDrawer(true)}
          className="top-1/2 -translate-y-1/2 bg-primary text-gray-0 dark:bg-primary"
          totalItems={totalItems}
        />
      ) : null}
      <Drawer
        isOpen={openDrawer ?? false}
        onClose={() => setOpenDrawer(false)}
        overlayClassName="dark:bg-opacity-60"
        containerClassName="dark:bg-gray-100 max-w-md">
        <CartDrawerView
          setOpenDrawer={setOpenDrawer}
          clearItemFromCart={clearItemFromCart}
          removeItemFromCart={removeItemFromCart}
          addItemToCart={addItemToCart}
          items={items}
          total={total}
        />
      </Drawer>
    </>
  );
}
