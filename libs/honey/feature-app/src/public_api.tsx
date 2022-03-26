import { Route, Routes } from 'react-router-dom';
import { useCollection, useCollections } from './hooks/collection';
import { HomePage } from './routes/board/pages/home/home';

const AppRoutes = () => {
  const collection = useCollection('id1');
  return (
    <Routes>
      <Route path="board" element={<HomePage />} />
    </Routes>
  );
};
export default AppRoutes;
