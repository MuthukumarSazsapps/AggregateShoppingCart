import ForgotPassword from 'pages/auth/(forgot-password)/forgotPassword';
import Home from 'pages/Home';
import Login from 'pages/login';
import MenuListPage from 'pages/menu/menu-list';
import NotFoundPage from 'pages/404';
import OtpPage from 'pages/auth/(otp)/otp';
import Profile from 'layouts/profile-settings';
import ProfileLayout from 'layouts/layout';
import React from 'react';
import SignIn from 'pages/auth/(sign-in)/signIn';
import SignUp from 'pages/auth/(sign-up)/signup';
import SubscriberListPage from 'pages/subscriber-pages/subscribers-list';
import UsersListPage from 'pages/user-pages/users-list';
import WelcomePage from 'pages/welcom-page';
import { PrivateRoutesValidator, AdminRoutesValidator, OtpRouteValidator } from './validators';
import { Route, Routes } from 'react-router-dom';
import SubMenuListPage from 'pages/submenu/submenu-list';
import StateListPage from 'pages/location-pages/location-list';
import CityListPage from 'pages/city-pages/city-list';
import PasswordSettingsView from 'layouts/password-settings';
import SubCityListPage from 'pages/sub-city-pages/sub-city-list';
import BranchListPage from 'pages/branch-pages/branch-list';
import AgentListPage from 'pages/agent-pages/agent-list';
import ShowRoomListPage from 'pages/showroom-pages/showroom-list';
import CustomerListPage from 'pages/customer-pages/customer-list';
import VehicleListPage from 'pages/vehicle-pages/vehicle-list';
import LoanForm from 'pages/loan-pages/loan-form';
import CustomerForm from 'pages/customer-pages/customer-form';
import LedgerListPage from 'pages/ledger-pages/ledgerGroup-list';
import CustomerReportPage from 'pages/Due-List/due-list';
import PendingDuesListPage from 'pages/outstanding-due/outstanding-due-list';
import LoanListPage from 'pages/loan-pages/loan-list';
import PendingListPage from 'pages/report/PendingReport/pending-list';
import LoanPreclosePage from 'pages/preclose-pages/preclose';
import useLocalData from 'hooks/use-localData';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import DocumentPendingListPage from 'pages/report/document-report';
import LogsListPage from 'pages/logs-page/logs-list';
import DaybookPage from 'pages/day-book/daybook';
import SubLogsListPage from 'pages/logs-page/sub-logs-list';
import DefaultListPage from 'pages/report/DefaultReport/default-list';
import PaymentsForm from 'pages/payments/payments-form';
import ProductDetailsPage from 'pages/e-commerce/shop';
import PointOfSalePage from 'pages/e-commerce/point-of-sale/page';

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
        <Route path="/e-commerce/Shop" element={<ProductDetailsPage />} />
        <Route path="/e-commerce/productSales" element={<PointOfSalePage />} />

        {/* <Route element={<AdminRoutesValidator />}>
            <Route path="/list/subscribers" element={<SubscriberListPage />} />
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
