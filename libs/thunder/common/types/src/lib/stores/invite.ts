export interface InviteState {
  loadingStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED' | 'ERROR';
  error: string | null;
  ownerId?: string;
  user?: {
    id: string;
    email: string;
  };
  group?: {
    id: string;
    name: string;
  };
}
