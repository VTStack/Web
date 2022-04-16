import { useMemo } from 'react';
import { useGroups } from '.';
import { GroupsEntity, GroupsState } from '@v-thomas/thunder/types';
import { useParams } from 'react-router-dom';

export const useGroup = (): {
  group: GroupsEntity;
  clearGroups: () => void;
  allGroups: GroupsState;
  getGroupByField: (payload: any) => any;
  clearGroupErrors: () => void;
} => {
  const { groupId }: any = useParams();

  const { groups, clearGroups, allGroups, clearGroupErrors } = useGroups();

  const group = useMemo(() => groups.filter(v => v?.id === groupId)?.[0], [groups, groupId]);

  const getGroupByField = (payload: any): any => {
    const { value, field }: { field: 'name' | 'id' | 'createdAt'; value: string } = payload;
    return groups.filter(v => v[field] === value)?.[0];
  };

  return { group, clearGroups, allGroups, getGroupByField, clearGroupErrors };
};
