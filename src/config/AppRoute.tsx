import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = /** @__REACT_LAZY_COMPONENT__ */ lazy(() => import('@/view/Home'));
const Install = /** @__REACT_LAZY_COMPONENT__ */ lazy(() => import('@/view/Install'));

function AppRoute() {
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/install" element={<Install />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoute;
