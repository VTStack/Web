type Action = 'TOGGLE_SIGNUP' | 'TOGGLE_SIGNIN' | 'CLOSE';

export const modalStateReducer = (state: any, action: Action) => {
  switch (action) {
    case 'TOGGLE_SIGNUP':
      return {
        signUp: !state.signUp,
        signIn: !state.signUp && state.signIn ? false : state.signIn
      };
    case 'TOGGLE_SIGNIN':
      return {
        signUp: !state.signIn && state.signUp ? false : state.signUp,
        signIn: !state.signIn
      };
    case 'CLOSE':
      return {
        signUp: false,
        signIn: false
      };

    default:
      throw new Error('no action provided');
  }
};

export default modalStateReducer;
