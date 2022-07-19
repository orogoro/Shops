import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation, Loader } from './shops';

const Shops = lazy(() => import('../pages/shops/Shops'));
const ShoppingCart = lazy(() => import('../pages/shoppingCart/ShoppingCart'));

export const App = () => {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Shops />} />
          <Route path="Shopping_cart" element={<ShoppingCart />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
