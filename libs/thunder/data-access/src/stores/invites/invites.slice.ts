import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction
} from '@reduxjs/toolkit';

export const INVITES_FEATURE_KEY = 'invites';

/*
 * Update these interfaces according to your requirements.
 */
export interface InvitesEntity {
  id: number;
  createdAt: string;
}

export interface InvitesState extends EntityState<InvitesEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}

export const invitesAdapter = createEntityAdapter<InvitesEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchInvites())
 * }, [dispatch]);
 * ```
 */
export const fetchInvites = createAsyncThunk('invites/fetchStatus', async (_, thunkAPI) => {
  /**
   * Replace this with your custom fetch call.
   * For example, `return myApi.getInvitess()`;
   * Right now we just return an empty array.
   */
  return Promise.resolve([]);
});

export const initialInvitesState: InvitesState = invitesAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null
});

export const invitesSlice = createSlice({
  name: INVITES_FEATURE_KEY,
  initialState: initialInvitesState,
  reducers: {
    add: invitesAdapter.addOne,
    remove: invitesAdapter.removeOne
    // ...
  },
  extraReducers: builder => {
    builder
      .addCase(fetchInvites.pending, (state: InvitesState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchInvites.fulfilled, (state: InvitesState, action: PayloadAction<InvitesEntity[]>) => {
        invitesAdapter.setAll(state, action.payload);
        state.loadingStatus = 'loaded';
      })
      .addCase(fetchInvites.rejected, (state: InvitesState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message || '';
      });
  }
});

/*
 * Export reducer for store configuration.
 */
export const invitesReducer = invitesSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(invitesActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const invitesActions = invitesSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllInvites);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = invitesAdapter.getSelectors();

export const getInvitesState = (rootState: any): InvitesState => rootState[INVITES_FEATURE_KEY];

export const selectAllInvites = createSelector(getInvitesState, selectAll);

export const selectInvitesEntities = createSelector(getInvitesState, selectEntities);
