import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getUserState, clearAuthErrors } from '@v-thomas/thunder/data-access';
import { useNavigate } from 'react-router-dom';

export const useAuth = (location = '/') => {
  const dispatch = useDispatch();

  const state = useSelector(getUserState);

  const router = useNavigate();

  useEffect(() => {
    if (state.loadingStatus === 'NOT_LOADED' && !state.error && !state?.id) {
      dispatch(fetchUser());
    }
    if (state.loadingStatus === 'NOT_AUTHED') {
      dispatch(clearAuthErrors({}));
      router(location);
    }
  }, [location, dispatch, state, router]);

  return null;
};
