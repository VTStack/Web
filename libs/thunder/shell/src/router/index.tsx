import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const FeatureApp = lazy(() => import('@v-thomas/libs/thunder/feature-app'));
const PublicRoot = lazy(() => import('@v-thomas/libs/thunder/feature-public'));

export function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path="/app/*" element={<FeatureApp />} />
        <Route path="*" element={<PublicRoot />} />
      </Routes>
    </Suspense>
  );
}
