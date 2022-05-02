import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearGroups,
  getGroupsState,
  clearGroupErrors,
  selectAllGroups
} from '@v-thomas/thunder/data-access';
import { GroupsEntity, GroupsState } from '@v-thomas/thunder/types';

export const useGroups = (): {
  groups: GroupsEntity[];
  clearGroups: () => void;
  allGroups: GroupsState;
  clearGroupErrors: () => void;
  addGroup: (T: string) => void;
} => {
  const dispatch = useDispatch();
  const state = useSelector(selectAllGroups);
  const allState = useSelector(getGroupsState);

  useEffect(() => {
    if (allState.loadingStatus === 'NOT_LOADED') {
      // dispatch(fetchGroups());
    }
  }, [allState.loadingStatus, dispatch]);

  const clearGroupErors = () => {
    dispatch(clearGroupErrors());
  };

  const addgroup = (name: string) => {
    // dispatch(addGroup({ payload: { name } }));
  };

  return {
    groups: state as GroupsEntity[],
    clearGroups: () => dispatch(clearGroups()),
    allGroups: allState,
    clearGroupErrors: clearGroupErors,
    addGroup: addgroup
  };
};
