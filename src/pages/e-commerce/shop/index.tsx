import { routes } from 'config/routes';
// import PageHeader from 'app/shared/page-header';
import ProductDetails from './product-details';
// import { metaObject } from '@/config/site.config';
import TableLayout from 'common/table & form/table-layout';

// export const metadata = {
//   ...metaObject('Product Details'),
// };

export default function ProductDetailsPage({ params }: any) {
  const pageHeader = {
    title: 'Shop',
    breadcrumb: [
      {
        href: routes.eCommerce.dashboard,
        name: 'E-Commerce',
      },
      {
        href: routes.eCommerce.shop,
        name: 'Shop',
      },
      // {
      //   name: params.slug,
      // },
    ],
  };
  return (
    <>
      {/* <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} /> */}
      <TableLayout title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        {/* <DrawerButton title="Create New City" customSize="540px">
          <CityForm />
        </DrawerButton> */}
      </TableLayout>
      <ProductDetails />
    </>
  );
}
