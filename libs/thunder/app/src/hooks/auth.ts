import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getUserState, clearAuthErrors } from '@v-thomas/thunder/data-access';
import { useNavigate } from 'react-router-dom';
import { closeModal } from '@v-thomas/thunder/data-access';
export const useAuth = (location = '/') => {
  const dispatch = useDispatch();
  const state = useSelector(getUserState);
  const router = useNavigate();

  useEffect(() => {
    if (state.loadingStatus === 'NOT_LOADED' && !state.error && !state?.id) dispatch(fetchUser());
    if (state.loadingStatus === 'NOT_AUTHED' || state.loadingStatus === 'ERROR') {
      dispatch(clearAuthErrors({}));
      router(location);
    }
  }, [location, dispatch, state, router]);
};
export const usePublicAuth = (location = '/app') => {
  const dispatch = useDispatch();
  const state = useSelector(getUserState);
  const router = useNavigate();

  useEffect(() => {
    if (state.loadingStatus === 'NOT_LOADED' && !state.error && !state?.id) dispatch(fetchUser());
    if (state.loadingStatus === 'AUTHED') {
      dispatch(closeModal());
      if (state.hasAuthedInSession === true) setTimeout(() => router(location), 500);
      else router('/app');
    }
  }, [location, dispatch, state, router]);
};
