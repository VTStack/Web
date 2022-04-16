import { EntityState } from '@reduxjs/toolkit';

export interface InvitesEntity {
  id: number;
  createdAt: string;
}

export interface InvitesState extends EntityState<InvitesEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}
