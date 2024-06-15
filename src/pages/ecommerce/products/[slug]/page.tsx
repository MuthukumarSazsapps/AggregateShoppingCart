import { routes } from 'config/routes';
import PageHeader from 'shared/page-header';
import ProductDetails from 'shared/ecommerce/product/product-details';
import { metaObject } from 'config/site.config';

export const metadata = {
  ...metaObject('Product Details'),
};

export default function ProductDetailsPage({ params }: any) {
  const pageHeader = {
    title: 'Shoppp',
    breadcrumb: [
      {
        href: routes.eCommerce.dashboard,
        name: 'E-Commerceee',
      },
      {
        href: routes.eCommerce.shop,
        name: 'Shop',
      },
      {
        name: params.slug,
      },
    ],
  };
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <ProductDetails />
    </>
  );
}
