import { createAsyncThunk, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { UserState } from '@v-thomas/thunder/types';
import { getUser, signIn, signOut, signUp } from '../../lib/auth';

export const USER_FEATURE_KEY = 'user';

export const initialUserState: UserState = {
  loadingStatus: 'NOT_LOADED',
  error: null,
  hasAuthedInSession: false,
  avatar: null
};

export const fetchUser = createAsyncThunk('user/fetchUser', async (_, thunkAPI) => {
  try {
    const user = await getUser();
    return user;
  } catch (e) {
    return thunkAPI.rejectWithValue('NOT_AUTHED');
  }
});

type Action = { payload: { email: string; password: string } };

export const signInUser = createAsyncThunk('user/signInUser', async (action: Action, thunkAPI) => {
  const { payload } = action;

  const { email, password } = payload;
  const response: any = (await signIn(email, password))[1];
  if (response && response.toJSON().status === 401) {
    return thunkAPI.rejectWithValue('WRONG_CREDENTIALS');
  }
  return await getUser();
});

export const signUpUser = createAsyncThunk('user/signUpUser', async (action: Action, thunkAPI) => {
  const { payload } = action;

  const { email, password } = payload;

  const error = (await signUp(email, password))[1];
  if (!error) {
    await signIn(email, password);
    return await getUser();
  }
  const status = error.toJSON().status;
  if (status === 400) {
    return thunkAPI.rejectWithValue('ALREADY_EXISTS');
  }
});

export const signOutUser = createAsyncThunk('user/signOutUser', signOut);

export const userSlice: Slice = createSlice({
  name: USER_FEATURE_KEY,
  initialState: initialUserState,
  reducers: {
    clearAuthErrors: state => void (state.error = null),
    removeAuthed: (state: UserState): UserState => ({
      ...state,
      loadingStatus: 'NOT_AUTHED',
      email: null,
      createdAt: null,
      id: null,
      error: null
    })
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, (state: UserState) => {
        state.loadingStatus = 'LOADING';
      })
      .addCase(fetchUser.fulfilled, (state: UserState, action: PayloadAction<UserState>): UserState => {
        const { createdAt, email, id, avatar } = action.payload;

        return {
          ...state,
          loadingStatus: 'AUTHED',
          error: null,
          avatar,
          createdAt,
          id,
          email
        };
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(fetchUser.rejected, (state: UserState, action: any) => {
        state.loadingStatus = action.payload;
      });

    builder
      .addCase(signInUser.pending, state => {
        state.loadingStatus = 'LOADING';
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(signInUser.fulfilled, (state: UserState, action: any) => {
        const { id, email, createdAt } = action.payload;
        return {
          ...state,
          loadingStatus: 'AUTHED',
          error: null,
          id,
          email,
          createdAt,
          hasAuthedInSession: true
        };
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(signInUser.rejected, (state: UserState, action: any) => {
        state.loadingStatus = action.payload;
      });
    builder
      .addCase(signOutUser.pending, state => {
        state.loadingStatus = 'LOADING';
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(signOutUser.fulfilled, (state: UserState): UserState => {
        return {
          ...state,
          loadingStatus: 'NOT_AUTHED',
          error: null,
          createdAt: null,
          email: null,
          id: null
        };
      })
      .addCase(signOutUser.rejected, (state: UserState, action: any) => {
        state.loadingStatus = 'ERROR';
        state.error = action.error.message;
      });
    builder
      .addCase(signUpUser.pending, state => {
        state.loadingStatus = 'LOADING';
      })
      .addCase(
        signUpUser.fulfilled,
        (state: UserState, action: PayloadAction<UserState>): UserState => ({
          ...action.payload,
          loadingStatus: 'AUTHED',
          error: null
        })
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(
        signUpUser.rejected,
        (state: UserState, action: any): UserState => ({
          ...state,
          loadingStatus: 'ERROR',
          error: action.payload
        })
      );
  }
});

export const userReducer = userSlice.reducer;

export const { clearAuthErrors, removeAuthed } = userSlice.actions;

export const getUserState = (rootState: Record<string, UserState>): UserState => rootState[USER_FEATURE_KEY];
