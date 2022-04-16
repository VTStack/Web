/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InviteState } from '@v-thomas/thunder/types';
import { addMemberToGroup, getInviteFromId } from '../../lib/invites';

export const INVITE_FEATURE_KEY = 'invite';

export const fetchInvite = createAsyncThunk(
  'invite/fetchStatus',
  async (action: { payload: { inviteId: string } }, thunkAPI) => {
    const { inviteId } = action.payload;
    const [invite, error] = await getInviteFromId(inviteId);
    if (error.toJSON().status === 409) return thunkAPI.rejectWithValue({ type: 'OWNER_OF_INVITE' });
    if (error.toJSON().status === 400) return thunkAPI.rejectWithValue({ type: 'INVITE_NOT_FOUND' });
    return invite;
  }
);

export const addMember = createAsyncThunk(
  'invite/addMember',
  async (action: { payload: { inviteId: string } }, thunkAPI) => {
    const { inviteId } = action.payload;
    const [member, error] = await addMemberToGroup(inviteId);
    // if (error) return thunkAPI.rejectWithValue({ type: 'OWNER_OF_INVITE' });
    return member;
  }
);

export const initialInviteState: InviteState = {
  loadingStatus: 'NOT_LOADED',
  error: null
};

export const inviteSlice = createSlice({
  name: INVITE_FEATURE_KEY,
  initialState: initialInviteState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchInvite.pending, (state: InviteState) => {
        state.loadingStatus = 'LOADING';
      })
      .addCase(fetchInvite.fulfilled, (state: InviteState, action: PayloadAction<any>) => {
        const { inviteOwnerId, Group, InviteOwner } = action.payload;
        state.ownerId = inviteOwnerId;
        state.group = {
          name: Group.name,
          id: Group.id
        };
        state.user = {
          id: InviteOwner.id,
          email: InviteOwner.email
        };

        state.loadingStatus = 'LOADED';
      })
      .addCase(fetchInvite.rejected, (state: InviteState, action: any) => {
        state.loadingStatus = 'ERROR';
        const { type } = action.payload;
        state.error = type;
      });

    builder
      .addCase(addMember.pending, (state: InviteState) => {
        state.loadingStatus = 'LOADING';
      })
      .addCase(addMember.fulfilled, (state: InviteState, action: PayloadAction<any>) => {
        state.loadingStatus = 'LOADED';
      })
      .addCase(addMember.rejected, (state: InviteState, action: any) => {
        state.loadingStatus = 'ERROR';
      });
  }
});

export const inviteReducer = inviteSlice.reducer;

export const inviteActions = inviteSlice.actions;

export const getInviteState = (rootState: any): InviteState => rootState[INVITE_FEATURE_KEY];
