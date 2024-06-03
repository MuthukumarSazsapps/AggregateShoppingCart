'use client';

import { useParams } from 'react-router-dom';
import ProductDetailsRelatedProducts from './product-details-related-products';
import ProductDetailsDescription from './product-details-description';
import ProductDeliveryOptions from './product-delivery-options';
import ProductDetailsGallery from './product-details-gallery';
import ProductDetailsSummery from './product-details-summery';
import ProductDetailsReview from './product-details-review';
import { modernProductsGrid } from '../shop/form/shop-products';
import { generateSlug } from 'utils/validators/generate-slug';

export default function ProductDetails() {
  const params = useParams();
  const product =
    modernProductsGrid.find(item => generateSlug(item.title) === params.slug) ??
    modernProductsGrid[0];

  return (
    <div className="@container">
      <div className="@3xl:grid @3xl:grid-cols-12">
        <div className="col-span-7 mb-7 @container @lg:mb-10 @3xl:pe-10">
          <ProductDetailsGallery />
        </div>
        <div className="col-span-5 @container">
          <ProductDetailsSummery product={product} />
          <ProductDeliveryOptions />
          <ProductDetailsDescription />
          <ProductDetailsReview />
        </div>
      </div>
      <ProductDetailsRelatedProducts />
    </div>
  );
}
