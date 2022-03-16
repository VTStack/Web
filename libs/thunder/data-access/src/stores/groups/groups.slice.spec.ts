import { fetchGroups, groupsAdapter, groupsReducer } from './groups.slice';

describe('groups reducer', () => {
  it('should handle initial state', () => {
    const expected = groupsAdapter.getInitialState({
      loadingStatus: 'NOT_LOADED',
      error: null
    });

    expect(groupsReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchGroupss', () => {
    let state = groupsReducer(undefined, fetchGroups.pending('', void 0));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'LOADING',
        error: null,
        entities: {},
        ids: []
      })
    );

    state = groupsReducer(state, fetchGroups.fulfilled([{ id: 1 }], '', void 0));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'LOADED',
        error: null,
        entities: { 1: { id: 1 } },
        ids: [1]
      })
    );

    state = groupsReducer(state, fetchGroups.rejected(new Error('Uh oh'), '', void 0));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'ERROR',
        error: 'Uh oh',
        entities: { 1: { id: 1 } }
      })
    );
  });
});
