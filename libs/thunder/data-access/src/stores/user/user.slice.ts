import { createAsyncThunk, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { getUser, signIn, signOut, signUp } from '../../lib/auth';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
  loadingStatus: 'NOT_LOADED' | 'NOT_AUTHED' | 'LOADING' | 'AUTHED' | 'WRONG_CREDENTIALS' | 'ERROR';
  error?: string | null;
  id?: string | null;
  email?: string | null;
  createdAt?: string | null;
}
export const initialUserState: UserState = {
  loadingStatus: 'NOT_LOADED',
  error: null
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

export const signUpUser = createAsyncThunk('user/signUpUser', async (action: Action) => {
  const { payload } = action;

  const { email, password } = payload;

  await signUp(email, password);

  return await getUser();
});
export const signInUser = createAsyncThunk('user/signInUser', async (action: Action, thunkAPI) => {
  const { payload } = action;

  const { email, password } = payload;
  const response = (await signIn(email, password))[1];
  if (response && response.toJSON().status === 401) {
    return thunkAPI.rejectWithValue('WRONG_CREDENTIALS');
  }
  return await getUser();
});

export const signOutUser = createAsyncThunk('user/signOutUser', signOut);

export const userSlice: Slice = createSlice({
  name: USER_FEATURE_KEY,
  initialState: initialUserState,
  reducers: {
    clearAuthErrors: state => void (state.error = null)
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, (state: UserState) => {
        state.loadingStatus = 'LOADING';
      })
      .addCase(fetchUser.fulfilled, (state: UserState, action: PayloadAction<UserState>): UserState => {
        const { createdAt, email, id } = action.payload;

        return {
          loadingStatus: 'AUTHED',
          error: null,
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
          loadingStatus: 'AUTHED',
          error: null,
          id,
          email,
          createdAt
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
      .addCase(signOutUser.fulfilled, (state: UserState, action: any): UserState => {
        return {
          loadingStatus: 'AUTHED',
          error: null
        };
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(signOutUser.rejected, (state: UserState, action: any) => {
        state.loadingStatus = 'ERROR';
        state.error = action.error.message;
      });
  }
});

export const userReducer = userSlice.reducer;

export const { clearAuthErrors } = userSlice.actions;

export const getUserState = (rootState: Record<string, UserState>): UserState => rootState[USER_FEATURE_KEY];
