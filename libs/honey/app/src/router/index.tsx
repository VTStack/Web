import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../routes/board/pages/home';
// const FeatureApp = lazy(() => import('@v-thomas/honey/feature-app'));

export function HoneyApp() {
  return (
    <Routes>
      <Route path="board/:colId" element={<HomePage />} />
    </Routes>
  );
}
