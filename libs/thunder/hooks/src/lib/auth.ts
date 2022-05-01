import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserState } from '@v-thomas/thunder/data-access';
import { useNavigate } from 'react-router-dom';
export const useAuth = (location = '/') => {
  const state = useSelector(getUserState);
  const router = useNavigate();

  useEffect(() => {
    // if (state.loadingStatus === 'NOT_LOADED' && !state.error && !state?.id) dispatch(fetchUser());
    if (state.loadingStatus === 'NOT_AUTHED' || state.loadingStatus === 'ERROR') {
      // dispatch(clearAuthErrors({}));
      router(location);
    }
  }, [router, location, state]);
};
export const usePublicAuth = (location = '/app') => {
  const state = useSelector(getUserState);
  const router = useNavigate();

  useEffect(() => {
    // if (state.loadingStatus === 'NOT_LOADED' && !state.error && !state?.id) dispatch(fetchUser());
    if (state.loadingStatus === 'AUTHED') {
      // dispatch(closeModal());
      if (state.hasAuthedInSession === true) setTimeout(() => router(location), 500);
      else router('/app');
    }
  }, [router, location, state]);
};
