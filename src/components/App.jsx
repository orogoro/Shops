import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation, Loader } from './shops';

const Shops = lazy(() => import('../pages/shops/Shops'));
const ShopsMenuCFS = lazy(() =>
  import('./shops/shopsMenu/shopsMenuCFS/ShopsMenuCFS')
);
const ShopsMenuMcDonny = lazy(() =>
  import('./shops/shopsMenu/shopsMenuMcDonny/ShopsMenuMcDonny')
);
const ShoppingCart = lazy(() => import('../pages/shoppingCart/ShoppingCart'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/Shops" element={<Shops />}>
            <Route path="McDonny" element={<ShopsMenuMcDonny />} />
            <Route path="CFS" element={<ShopsMenuCFS />} />
          </Route>
          <Route path="Shopping_cart" element={<ShoppingCart />} />

          <Route path="*" element={<Navigate to="/Shops" />} />
        </Routes>
      </Suspense>
    </>
  );
};
