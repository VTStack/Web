import { createSlice } from '@reduxjs/toolkit';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthModalState {
  signIn: boolean;
  signUp: boolean;
  email: string;
  password: string;
}

export const initialState: AuthModalState = {
  signIn: false,
  signUp: false,
  email: '',
  password: ''
};

export const authSlice = createSlice({
  name: AUTH_FEATURE_KEY,
  initialState,
  reducers: {
    toggleSignUpModal: (
      state: AuthModalState,
      action: { type: string; payload: { type: 'OPEN' | 'CLOSE' } }
    ) => {
      const { type } = action.payload;
      return type === 'OPEN' ? { ...state, signUp: true } : { ...state, signUp: false };
    },
    toggleSignInModal: (
      state: AuthModalState,
      action: { type: string; payload: { type: 'OPEN' | 'CLOSE' } }
    ) => {
      const { type } = action.payload;
      return type === 'OPEN' ? { ...state, signIn: true } : { ...state, signIn: false };
    },
    closeModal: (state: AuthModalState) => {
      state.signUp = false;
      state.signIn = false;
    },

    updateEmail: (state: AuthModalState, action: { payload: string }) => {
      state.email = action.payload;
    },
    updatePassword: (state: AuthModalState, action: { payload: string }) => ({
      ...state,
      password: action.payload
    }),
    clearFields: (state: AuthModalState) => ({
      ...state,
      email: '',
      password: ''
    }),
    clearField: (state: AuthModalState, action: { payload: 'username' | 'password' }) => ({
      ...state,
      [action.payload]: ''
    })
  }
});

export const authReducer = authSlice.reducer;

export const { closeModal, toggleSignInModal, toggleSignUpModal, updatePassword, updateEmail, clearFields } =
  authSlice.actions;

export const selectAuthModalState = (rootState: any): AuthModalState => rootState[AUTH_FEATURE_KEY];
