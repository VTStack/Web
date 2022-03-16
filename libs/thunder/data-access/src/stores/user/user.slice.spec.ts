import { fetchUser, initialUserState, userReducer } from './user.slice';

describe('user reducer', () => {
  it('should handle initial state', () => {
    expect(initialUserState).toBeDefined();
    expect(initialUserState).toHaveProperty('loadingStatus', 'NOT_LOADED');
    expect(initialUserState).toHaveProperty('error', null);
  });

  it('should handle fetchUsers', () => {
    let state = userReducer(undefined, fetchUser.pending('', void 0));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'LOADING',
        error: null
      })
    );

    const createdAt = new Date().toString();

    state = userReducer(
      state,
      fetchUser.fulfilled(
        { email: 'TEST@EMAIL.TEST', password: 'TESTING_PASSWORD', id: 'TEST_ID', createdAt },
        '',
        void 0
      )
    );
    expect(state).toEqual(
      expect.objectContaining({
        createdAt,
        loadingStatus: 'AUTHED',
        error: null,
        email: 'TEST@EMAIL.TEST',
        id: 'TEST_ID'
      })
    );

    state = userReducer(state, fetchUser.rejected({ message: 'TESTING', name: 'TESTING' }, '', void 0));
    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: undefined,
        createdAt,
        email: 'TEST@EMAIL.TEST',
        error: null,
        id: 'TEST_ID'
      })
    );
  });
});
