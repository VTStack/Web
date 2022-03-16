import { fetchInvite, inviteReducer } from './invite.slice';

describe('invite reducer', () => {
  it('should handle initial state', () => {
    const expected = {
      loadingStatus: 'NOT_LOADED',
      error: null
    };

    expect(inviteReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchInvites', () => {
    const state = inviteReducer(
      undefined,
      fetchInvite.pending('', { payload: { inviteId: 'TESTING_INVITE_ID' } })
    );
    expect(state).toHaveProperty('loadingStatus', 'LOADING');
    expect(state).toHaveProperty('error', null);

    // state = inviteReducer(
    //   state,
    //   fetchInvite.fulfilled(null, '', { payload: { inviteId: 'TESTING_INVITE_ID' } })
    // );

    // expect(state).toEqual(
    //   expect.objectContaining({
    //     loadingStatus: 'loaded',
    //     error: null,
    //     entities: { 1: { id: 1 } },
    //   })
    // );

    // state = inviteReducer(
    //   state,
    //   fetchInvite.rejected(new Error('Uh oh'), 'null', { payload: { inviteId: 'TESTING_INVITE_ID' } })
    // );

    // expect(state).toEqual(
    //   expect.objectContaining({
    //     loadingStatus: 'error',
    //     error: 'Uh oh',
    //     entities: { 1: { id: 1 } },
    //   })
    // );
  });
});
