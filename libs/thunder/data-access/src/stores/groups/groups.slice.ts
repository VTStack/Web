/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction
} from '@reduxjs/toolkit';
import { getAllGroups } from '../../lib/groups';
import { createGroup } from '../../lib/group';

export const GROUPS_FEATURE_KEY = 'groups';

export interface GroupsEntity {
  id: string;
  name: string;
  createdAt: string;
}

export interface GroupsState extends EntityState<GroupsEntity> {
  loadingStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED' | 'ERROR';
  error: string | null;
}

export const groupsAdapter = createEntityAdapter<GroupsEntity>();

export const fetchGroups = createAsyncThunk('groups/fetchStatus', async (_, thunkAPI) => {
  const [groups, error] = await getAllGroups();
  if (error) thunkAPI.dispatch(throwGroupNotFound());
  return error ? thunkAPI.rejectWithValue(error.toString()) : groups;
});

export const addGroup = createAsyncThunk('groups/addGroup', async (action: any, thunkAPI) => {
  const [groups, error] = await createGroup(action.payload);
  if (error) return thunkAPI.rejectWithValue(error);
  return groups;
});

export const initialGroupsState: GroupsState = groupsAdapter.getInitialState({
  loadingStatus: 'NOT_LOADED',
  error: null
});

export const groupsSlice = createSlice({
  name: GROUPS_FEATURE_KEY,
  initialState: initialGroupsState,
  reducers: {
    clearGroups: (state: GroupsState): GroupsState => ({
      ...state,
      entities: {},
      ids: [],
      loadingStatus: 'NOT_LOADED'
    }),
    throwGroupNotFound: (state: GroupsState): GroupsState => ({
      ...state,
      error: 'NOT_FOUND',
      loadingStatus: 'ERROR'
    }),
    clearGroupErrors: (state: GroupsState): GroupsState => ({
      ...state,
      error: null,
      loadingStatus: 'NOT_LOADED'
    })
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGroups.pending, (state: GroupsState) => {
        state.loadingStatus = 'LOADING';
      })
      .addCase(fetchGroups.fulfilled, (state: GroupsState, action: PayloadAction<GroupsEntity[]>) => {
        groupsAdapter.setAll(state, action.payload);
        state.loadingStatus = 'LOADED';
      })
      .addCase(fetchGroups.rejected, (state: GroupsState, action) => {
        state.loadingStatus = 'ERROR';
        state.error = action.error.message || '';
      });

    builder.addCase(addGroup.fulfilled, (state, action) => {
      groupsAdapter.addOne(state, action.payload);

      state.loadingStatus = 'LOADED';
    });
    builder.addCase(addGroup.rejected, (state, action) => {
      state.loadingStatus = 'ERROR';
    });
  }
});

export const groupsReducer = groupsSlice.reducer;

export const { clearGroups, throwGroupNotFound, clearGroupErrors } = groupsSlice.actions;

const { selectAll, selectEntities } = groupsAdapter.getSelectors();

export const getGroupsState = (rootState: any): GroupsState => rootState[GROUPS_FEATURE_KEY];

export const selectAllGroups = createSelector(getGroupsState, selectAll);

export const selectGroupsEntities = createSelector(getGroupsState, selectEntities);
