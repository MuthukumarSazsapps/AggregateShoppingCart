import { routes } from 'config/routes';
import CartTemplate from 'shared/ecommerce/cart';
import { metaObject } from 'config/site.config';
import TableLayout from 'common/table & form/table-layout';

export const metadata = {
  ...metaObject('Cart'),
};

const pageHeader = {
  title: 'Cart',
  breadcrumb: [
    {
      name: 'Home',
    },
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      name: 'Cart',
    },
  ],
};

export default function CartPage() {
  return (
    <>
      <TableLayout title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}></TableLayout>
      <CartTemplate />
    </>
  );
}
