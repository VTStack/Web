import { useDispatch, useSelector } from 'react-redux';
import { getUserState, fetchUser } from '@v-thomas/thunder/data-access';
import { useEffect } from 'react';

export const useUser = () => {
  const dispatch = useDispatch();
  const state = useSelector(getUserState);
  useEffect(() => {
    if (state.loadingStatus === 'NOT_LOADED' && state.error === null) {
      void dispatch(fetchUser());
    }
  }, [dispatch, state.error, state.loadingStatus]);

  return [state, !!state.id];
};
