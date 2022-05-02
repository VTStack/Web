// import { useDispatch, useSelector } from 'react-redux';
// import { getUserState, fetchUser, signOutUser } from '@v-thomas/thunder/data-access';
// import { useEffect } from 'react';

export const useUser = () => {
  // const dispatch = useDispatch();
  // const state = useSelector(getUserState);
  // useEffect(() => {
  //   if (state.loadingStatus === 'NOT_LOADED' && state.error === null) {
  //     void dispatch(fetchUser());
  //   }
  // }, [dispatch, state.error, state.loadingStatus]);

  // const signOut = () => {
  //   dispatch(signOutUser());
  // };

  return { user: {}, isAuthed: false, signOut: () => void 0 };
};
