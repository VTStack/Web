import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { features } from 'process';
import FeatureApp from '@v-thomas/honey/feature-app';
// const FeatureApp = lazy(() => import('@v-thomas/honey/feature-app'));

export function HoneyApp() {
  return (
    // <FeatureApp />
    // <Suspense fallback={<div>loading</div>}>
    <Routes>
      <Route path="*" element={<FeatureApp />} />
    </Routes>
    // </Suspense>
  );
}
