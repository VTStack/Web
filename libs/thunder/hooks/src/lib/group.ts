import { useMemo } from 'react';
import { useGroups } from '.';
import { GroupsEntity, GroupsState } from '@v-thomas/thunder/types';
import { useParams } from 'react-router-dom';

export const useGroup = (): {
  group: GroupsEntity;
  clearGroups: () => void;
  allGroups: GroupsState;
  getGroupByField: (payload: unknown) => unknown;
  clearGroupErrors: () => void;
} => {
  const { groupId } = useParams();

  const { groups, clearGroups, allGroups, clearGroupErrors } = useGroups();

  const group = useMemo(() => groups.filter(v => v?.id === groupId)?.[0], [groups, groupId]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getGroupByField = (payload: any) => {
    const { value, field }: { field: 'name' | 'id' | 'createdAt'; value: string } = payload;
    return groups.filter(v => v[field] === value)?.[0];
  };

  return { group, clearGroups, allGroups, getGroupByField, clearGroupErrors };
};
