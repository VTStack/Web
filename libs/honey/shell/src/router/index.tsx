import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const FeatureApp = lazy(() => import('@v-thomas/libs/honey/feature-app'));

export function HoneyApp() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path="*" element={<FeatureApp />} />
      </Routes>
    </Suspense>
  );
}
