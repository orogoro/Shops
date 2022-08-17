import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation, Loader } from './shops';
import { ToastContainer } from 'react-toastify';

const Shops = lazy(() => import('../pages/shops/Shops'));
const ShoppingCart = lazy(() => import('../pages/shoppingCart/ShoppingCart'));
const History = lazy(() => import('../pages/history/History'));
const Home = lazy(() => import('../pages/homePage/HomePage'));
const ShopsMenu = lazy(() => import('./shops/shopsMenu/ShopsMenu'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Shops" element={<Shops />}>
            <Route path="Shops/:itemId" element={<ShopsMenu />} />e
          </Route>
          <Route path="Shopping_cart" element={<ShoppingCart />} />
          <Route path="History" element={<History />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </>
  );
};
