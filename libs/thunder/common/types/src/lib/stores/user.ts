export interface UserState {
  loadingStatus: 'NOT_LOADED' | 'NOT_AUTHED' | 'LOADING' | 'AUTHED' | 'WRONG_CREDENTIALS' | 'ERROR';
  error?: string | null;
  id?: string | null;
  email?: string | null;
  createdAt?: string | null;
  hasAuthedInSession?: boolean;
  avatar: null | string;
}
