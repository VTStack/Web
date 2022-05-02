import {
  AUTH_FEATURE_KEY,
  authReducer,
  USER_FEATURE_KEY,
  userReducer,
  GROUPS_FEATURE_KEY,
  groupsReducer,
  MOVIES_FEATURE_KEY,
  moviesReducer,
  INVITE_FEATURE_KEY,
  inviteReducer,
  INVITES_FEATURE_KEY,
  invitesReducer
} from '../public_api';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

export const ThunderStore: EnhancedStore = configureStore({
  reducer: {
    [INVITES_FEATURE_KEY]: invitesReducer,
    [INVITE_FEATURE_KEY]: inviteReducer,
    [USER_FEATURE_KEY]: userReducer,
    [MOVIES_FEATURE_KEY]: moviesReducer,
    [GROUPS_FEATURE_KEY]: groupsReducer,
    [AUTH_FEATURE_KEY]: authReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  enhancers: []
});

export type ThunderDispatch = typeof ThunderStore.dispatch;
