import { AiFillHome } from 'react-icons/ai';
import { routes } from '../../config/routes';
import { DUMMY_ID } from 'config/constants';

import {
  PiTableDuotone,
  PiUserPlusDuotone,
  PiShieldCheckDuotone,
  PiLockKeyDuotone,
  PiChatCenteredDotsDuotone,
  PiFolderNotchDuotone,
  PiCreditCardDuotone,
  PiShoppingCartDuotone,
} from 'react-icons/pi';

export type StaticSubMenuItem = {
  name: string;
  href?: string;
  icon?: JSX.Element | string;
  badge?: string;
};

export interface StaticMenuItem extends StaticSubMenuItem {
  dropdownItems?: StaticSubMenuItem[];
}
export const StaticMenuItems: StaticMenuItem[] = [
  {
    name: 'Pages',
  },
  {
    name: 'Home',
    href: '/',
    icon: <AiFillHome />,
  },
];

export const SubscriberItems: StaticMenuItem[] = [
  {
    name: 'E-Commerce',
    href: '#',
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      {
        name: 'Products',
        href: routes.eCommerce.products,
        badge: '',
      },
      {
        name: 'Product Details',
        href: routes.eCommerce.productDetails(DUMMY_ID),
      },
      {
        name: 'Create Product',
        href: routes.eCommerce.createProduct,
      },
      {
        name: 'Edit Product',
        href: routes.eCommerce.ediProduct(DUMMY_ID),
      },
      {
        name: 'Categories',
        href: routes.eCommerce.categories,
      },
      {
        name: 'Create Category',
        href: routes.eCommerce.createCategory,
      },
      {
        name: 'Edit Category',
        href: routes.eCommerce.editCategory(DUMMY_ID),
      },
      {
        name: 'Orders',
        href: routes.eCommerce.orders,
      },
      {
        name: 'Order Details',
        href: routes.eCommerce.orderDetails(DUMMY_ID),
      },
      {
        name: 'Create Order',
        href: routes.eCommerce.createOrder,
      },
      {
        name: 'Edit Order',
        href: routes.eCommerce.editOrder(DUMMY_ID),
      },
      {
        name: 'Reviews',
        href: routes.eCommerce.reviews,
      },
      {
        name: 'Shop',
        href: routes.eCommerce.shop,
      },
      {
        name: 'Cart',
        href: routes.eCommerce.cart,
      },
      {
        name: 'Checkout & Payment',
        href: routes.eCommerce.checkout,
      },
    ],
  },
  // {
  //   name: 'Loan Master',
  //   href: '#',
  //   icon: <PiTableDuotone />,
  //   dropdownItems: [
  //     {
  //       name: 'Create Loan',
  //       href: '/',
  //       icon: <PiFolderNotchDuotone />,
  //     },
  //     {
  //       name: 'Loan List',
  //       href: '/list/loans',
  //       icon: <PiFolderNotchDuotone />,
  //     }
  //     {
  //       name: 'Loan Preclose',
  //       href: '/loan/preclose',
  //       icon: <PiFolderNotchDuotone />,
  //     },
  //   ],
  // },
  // {
  //   name: 'Finance Master',
  //   href: '#',
  //   icon: <PiTableDuotone />,
  //   dropdownItems: [
  //     {
  //       name: 'City List',
  //       href: '/list/sub-cities',
  //       icon: <PiFolderNotchDuotone />,
  //     },
  //     {
  //       name: 'Agents List',
  //       href: '/list/agents',
  //       icon: <PiFolderNotchDuotone />,
  //     },
  //     {
  //       name: 'Branch List',
  //       href: '/list/branches',
  //       icon: <PiFolderNotchDuotone />,
  //     },
  //     {
  //       name: 'ShowRoom List',
  //       href: '/list/showrooms',
  //       icon: <PiFolderNotchDuotone />,
  //     },

  //     {
  //       name: 'Vehicle List',
  //       href: '/list/vehicles',
  //       icon: <PiFolderNotchDuotone />,
  //     },
  //   ],
  // },
  // {
  //   name: 'Ledger',
  //   href: '/list/ledger',
  //   icon: <PiFolderNotchDuotone />,
  // },
  // {
  //   name: 'Report',
  //   href: '#',
  //   icon: <PiTableDuotone />,
  //   dropdownItems: [
  //     {
  //       name: 'Pending Report',
  //       href: '/report/pending',
  //       badge: 'new',
  //     },
  //     {
  //       name: 'Documnets Report',
  //       href: '/report/documents',
  //       badge: 'new',
  //     },
  //     {
  //       name: 'DayBook',
  //       href: '/report/daybook',
  //       badge: 'new',
  //     },
  //     {
  //       name: 'Default Report',
  //       href: '/report/Default',
  //       badge: 'new',
  //     },
  //   ],
  // },
  // {
  //   name: 'User Management',
  //   href: '#',
  //   icon: <PiTableDuotone />,
  //   dropdownItems: [
  //     {
  //       name: 'Users List',
  //       href: '/list/users',
  //       badge: 'new',
  //     },
  //   ],
  // },
  // {
  //   name: 'Logs',
  //   href: '/list/sub-logs',
  //   icon: <PiTableDuotone />,
  // },
  // {
  //   name: 'Payments',
  //   href: '/payments',
  //   icon: <PiTableDuotone />,
  // },
];

export const AdminItems: StaticMenuItem[] = [
  {
    name: 'Subscriber Management',
  },
  {
    name: 'Subscribers List',
    href: routes.tables.enhanced,
    icon: <PiTableDuotone />,
  },
  {
    name: 'Menu List',
    href: routes.tables.menu,
    icon: <PiTableDuotone />,
  },
  {
    name: 'SubMenu List',
    href: routes.tables.subMenu,
    icon: <PiTableDuotone />,
  },
  {
    name: 'State List',
    href: '/list/states',
    icon: <PiTableDuotone />,
  },
  {
    name: 'City List',
    href: '/list/cities',
    icon: <PiTableDuotone />,
  },
  {
    name: 'Logs',
    href: '/list/logs',
    icon: <PiTableDuotone />,
  },
];
