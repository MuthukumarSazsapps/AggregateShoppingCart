// import dynamic from 'next/dynamic';
import { routes } from 'config/routes';
import { metaObject } from 'config/site.config';
import PageHeader from 'shared/page-header';
import FiltersButton from 'shared/filters-button';
import ProductFeed from 'shared/ecommerce/shop/product-feed';
import ShopFilters from 'shared/ecommerce/shop/shop-filters';

// const ShopFilters = dynamic(
//   () => import('@/app/shared/ecommerce/shop/shop-filters'),
//   {
//     ssr: false,
//   }
// );

const pageHeader = {
  title: 'Shoppp',
  breadcrumb: [
    {
      name: 'Home',
    },
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerceee',
    },
    {
      name: 'Shop',
    },
  ],
};

export const metadata = {
  ...metaObject('Shop'),
};

export default function ShopPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <FiltersButton placement="right" modalView={<ShopFilters />} />
      </PageHeader>

      <ProductFeed />
    </>
  );
}
