import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearGroups,
  fetchGroups,
  getGroupsState,
  GroupsEntity,
  GroupsState,
  selectAllGroups
} from '@v-thomas/thunder/data-access';

export const useGroups = (): { groups: GroupsEntity[]; clearGroups: () => void; allGroups: GroupsState } => {
  const dispatch = useDispatch();
  const state = useSelector(selectAllGroups);
  const allState = useSelector(getGroupsState);

  const { loadingStatus } = allState;

  useLayoutEffect(() => {
    if (loadingStatus === 'NOT_LOADED') {
      dispatch(fetchGroups());
    }
  }, [loadingStatus, dispatch]);

  return { groups: state, clearGroups: () => dispatch(clearGroups()), allGroups: allState };
};
