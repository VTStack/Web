/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useGroups } from '.';
import { getGroupFromId } from '@v-thomas/thunder/data-access';
import { GroupsEntity, GroupsState, throwGroupNotFound } from '@v-thomas/thunder/data-access';
import { useParams } from 'react-router-dom';

export const useGroup = (): {
  group: GroupsEntity;
  clearGroups: () => void;
  allGroups: GroupsState;
  getGroupByField: (payload: any) => any;
} => {
  const { groupId }: any = useParams();

  const { groups, clearGroups, allGroups } = useGroups();

  const group = useMemo(() => groups.filter(v => v?.id === groupId)?.[0], [groups, groupId]);

  const getGroupByField = (payload: any): any => {
    const { value, field }: { field: 'name' | 'id' | 'createdAt'; value: string } = payload;
    return groups.filter(v => v[field] === value)?.[0];
  };

  return { group, clearGroups, allGroups, getGroupByField };
};
