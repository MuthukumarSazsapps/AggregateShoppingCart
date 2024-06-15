import Home from 'pages/Home';
import NotFoundPage from 'pages/404';
import React from 'react';
import WelcomePage from 'pages/welcom-page';
import { Route, Routes } from 'react-router-dom';
import ProductDetailsPage from 'pages/e-commerce/shop';
import ProductsPage from 'pages/ecommerce/products/page';
import CreateProductPage from 'pages/ecommerce/products/create/page';
import ShopPage from 'pages/ecommerce/shop/page';
import CreateProductPages from 'pages/ecommerce/products/create/createproductpages/product-list';
// import CreateProductPages from 'pages/ecommerce/products/create/createProductPage';

// interface UserRouteValidatorProps {
//   children: ReactNode;
// }

// const UserRouteValidator: React.FC<UserRouteValidatorProps> = ({ children }) => {
//   const { role } = useLocalData();
//   const [routes, setRoutes, removeRoutes] = useLocalStorage<string>('Routes');
//   const userRoutes = routes ? JSON.parse(routes) : [];
//   const isRouteAccessible = (route: string) => {
//     return userRoutes.includes(route) || role === 'Subscriber';
//   };

//   return isRouteAccessible(window.location.pathname) ? (
//     <>{children}</>
//   ) : (
//     <Navigate to="/" replace />
//   );
// };

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<WelcomePage />} />
        <Route path="/ecommerce/products" element={<ProductsPage />} />
        <Route path="/ecommerce/products/FC6723757651DB74" element={<ProductDetailsPage />} />
        <Route path="/ecommerce/products/create" element={<CreateProductPages />} />
        {/* <Route path={routes.eCommerce.productDetails(row.id)} element={<EditProductPage />} /> */}
        <Route path="/ecommerce/shop" element={<ShopPage />} />

        {/* <Route element={<AdminRoutesValidator />}>
            <Route path="/ecommerce/shop" element={<EditProductPage />} />
            <Route path="/list/menu" element={<MenuListPage />} />
            <Route path="/list/sub-menu" element={<SubMenuListPage />} />
            <Route path="/list/states" element={<StateListPage />} />
            <Route path="/list/cities" element={<CityListPage />} />
            <Route path="/list/logs" element={<LogsListPage />} />
          </Route> */}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRouter;
