import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useGroup } from '@v-thomas/thunder/hooks';
import { GroupHomePage } from './routes/group/pages/home';
import { GroupMoviePage } from './routes/group/pages/movie/movie';
import { GroupSearchPage } from './routes/group/pages/search/search';
import { GroupsHomePage } from './routes/home';

export const FeatureGroupsRouter = () => {
  const router = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { allGroups, clearGroupErrors } = useGroup();

  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  useEffect(() => {
    if (allGroups?.error === 'NOT_FOUND') {
      enqueueSnackbar({ message: 'Oh no you little naughty naughty! No access here', variant: 'error' });
      router('/app/groups', { replace: true });
      clearGroupErrors();
    }
  }, [allGroups, enqueueSnackbar, dispatch, clearGroupErrors, router]);

  return (
    <Routes>
      <Route index element={<GroupsHomePage />} />
      <Route path=":groupId/search" element={<GroupSearchPage />} />
      <Route path=":groupId" element={<Navigate to={'m'} replace />} />
      <Route path=":groupId/m" element={<GroupHomePage />} />
      <Route path=":groupId/m/:movieId" element={<GroupMoviePage />} />
    </Routes>
  );
};
