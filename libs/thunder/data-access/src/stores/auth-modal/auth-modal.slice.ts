import { createSlice } from '@reduxjs/toolkit';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  signIn: boolean;
  signUp: boolean;
  email: string;
  password: string;
}

export const initialState: AuthState = {
  signIn: false,
  signUp: false,
  email: '',
  password: ''
};

export const authSlice = createSlice({
  name: AUTH_FEATURE_KEY,
  initialState,
  reducers: {
    toggleSignUpModal: (state: AuthState, action: { type: string; payload: { type: 'OPEN' | 'CLOSE' } }) => {
      const { type } = action.payload;
      return type === 'OPEN' ? { ...state, signUp: true } : { ...state, signUp: false };
    },
    toggleSignInModal: (state: AuthState, action: { type: string; payload: { type: 'OPEN' | 'CLOSE' } }) => {
      const { type } = action.payload;
      return type === 'OPEN' ? { ...state, signIn: true } : { ...state, signIn: false };
    },
    closeModal: (state: AuthState) => {
      state.signUp = false;
      state.signIn = false;
    },

    updateEmail: (state: AuthState, action: { payload: string }) => {
      state.email = action.payload;
    },
    updatePassword: (state: AuthState, action: { payload: string }) => ({
      ...state,
      password: action.payload
    }),
    clearFields: (state: AuthState) => ({
      ...state,
      email: '',
      password: ''
    }),
    clearField: (state: AuthState, action: { payload: 'username' | 'password' }) => ({
      ...state,
      [action.payload]: ''
    })
  }
});

export const authReducer = authSlice.reducer;

export const { closeModal, toggleSignInModal, toggleSignUpModal, updatePassword, updateEmail, clearFields } =
  authSlice.actions;

export const selectAuthState = (rootState: any): AuthState => rootState[AUTH_FEATURE_KEY];
