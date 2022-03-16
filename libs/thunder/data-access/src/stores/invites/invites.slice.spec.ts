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
    let state = invitesReducer(undefined, fetchInvites.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {}
      })
    );

    state = invitesReducer(state, fetchInvites.fulfilled([{ id: 1 }], null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } }
      })
    );

    state = invitesReducer(state, fetchInvites.rejected(new Error('Uh oh'), null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } }
      })
    );
  });
});
