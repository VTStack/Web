import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useGroup } from '../../hooks';
import { clearGroupErrors } from '@v-thomas/thunder/data-access';
import { GroupHomePage } from './pages/home';
import { GroupMoviePage } from './pages/movie/movie';
import { GroupSearchPage } from './pages/search/search';

export function GroupRoute() {
  const router = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { allGroups }: any = useGroup();

  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  useEffect(() => {
    if (allGroups?.error === 'NOT_FOUND') {
      enqueueSnackbar({ message: 'Oh no you little naughty naughty! No access here', variant: 'error' });
      router('/app/groups', { replace: true });
      dispatch(clearGroupErrors());
    }
  }, [allGroups, enqueueSnackbar, dispatch, router]);
  return (
    <Routes>
      <Route path="search" element={<GroupSearchPage />} />
      <Route index element={<Navigate to={'m'} replace />} />
      <Route path="m" element={<GroupHomePage />} />
      <Route path="m/:movieId" element={<GroupMoviePage />} />
    </Routes>
  );
}
