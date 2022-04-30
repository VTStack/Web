import { initialState } from './auth-modal.slice';

describe('auth reducer', () => {
  it('should handle initial state', () => {
    expect(initialState).toBeDefined();
    expect(initialState).toHaveProperty('signIn', false);
    expect(initialState).toHaveProperty('signUp', false);
    expect(initialState).toHaveProperty('email', '');
    expect(initialState).toHaveProperty('password', '');
  });
});
