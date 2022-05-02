import { EntityState } from '@reduxjs/toolkit';

export interface GroupsEntity {
  id: string;
  name: string;
  createdAt: string;
}

export interface GroupsState extends EntityState<GroupsEntity> {
  loadingStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED' | 'ERROR';
  error: string | null;
}
