import { fetchInvites, invitesAdapter, invitesReducer } from './invites.slice';

describe('invites reducer', () => {
  it('should handle initial state', () => {
    const expected = invitesAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null
    });

    expect(invitesReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchInvitess', () => {
    let state = invitesReducer(undefined, fetchInvites.pending(''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {}
      })
    );

    state = invitesReducer(state, fetchInvites.fulfilled([], ''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: {},
        ids: []
      })
    );

    state = invitesReducer(state, fetchInvites.rejected(new Error('Uh oh'), ''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: {},
        ids: []
      })
    );
  });
});
