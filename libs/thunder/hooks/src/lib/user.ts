import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '@v-thomas/thunder/types';
import { getUserState, fetchUser, signOutUser } from '@v-thomas/thunder/data-access';
import { useEffect } from 'react';

export const useUser = (): { user: UserState; isAuthed: boolean; signOut: () => void } => {
  const dispatch = useDispatch<any>();
  const state = useSelector(getUserState);
  useEffect(() => {
    if (state.loadingStatus === 'NOT_LOADED' && state.error === null) {
      void dispatch(fetchUser());
    }
  }, [dispatch, state.error, state.loadingStatus]);

  const signOut = () => {
    dispatch(signOutUser());
  };

  return { user: state, isAuthed: !!state.id, signOut };
};
