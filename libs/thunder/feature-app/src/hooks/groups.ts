import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearGroups,
  fetchGroups,
  getGroupsState,
  GroupsEntity,
  GroupsState,
  selectAllGroups
} from '@v-thomas/libs/thunder/data-access';

export const useGroups = (
  all?: boolean
): { groups: GroupsEntity[]; clearGroups: () => void; allGroups: GroupsState } => {
  const dispatch = useDispatch();
  const state = useSelector(selectAllGroups);
  const allState = useSelector(getGroupsState);

  const status = allState.loadingStatus === 'LOADED';

  useLayoutEffect(() => {
    if (!state.length && !status) dispatch(fetchGroups());
  }, [dispatch, state.length, status]);

  return { groups: state, clearGroups: () => dispatch(clearGroups()), allGroups: allState };
};
