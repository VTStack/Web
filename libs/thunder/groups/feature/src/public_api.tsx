import { Title } from '@v-thomas/core/ui';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSigninCheck } from 'reactfire';
import { GroupHomePage } from './routes/group/pages/home';
import { GroupMoviePage } from './routes/group/pages/movie/movie';
import { GroupSearchPage } from './routes/group/pages/search/search';
import { GroupsHomePage } from './routes/home';

export const FeatureGroupsRouter = () => {
  const AuthCheck = useSigninCheck({ suspense: true });

  if (!AuthCheck.data?.signedIn && AuthCheck.status === 'success') return <Navigate to="/" />;

  return (
    <Suspense fallback={<Title>loading...</Title>}>
      <Routes>
        <Route index element={<GroupsHomePage />} />
        <Route path=":groupId/search" element={<GroupSearchPage />} />
        <Route path=":groupId" element={<Navigate to={'m'} replace />} />
        <Route path=":groupId/m" element={<GroupHomePage />} />
        <Route path=":groupId/m/:movieId" element={<GroupMoviePage />} />
      </Routes>
    </Suspense>
  );
};
