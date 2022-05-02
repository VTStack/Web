import { moviesAdapter, moviesReducer, clearMovies, fetchGroupMovies } from './movies.slice';
import { MoviesState } from '@v-thomas/thunder/types';

describe('movies reducer', () => {
  it('should handle initial state', () => {
    const expected = moviesAdapter.getInitialState({
      loadingStatus: 'NOT_LOADED',
      error: null,
      groupId: null
    } as MoviesState);

    expect(moviesReducer(undefined, clearMovies())).toEqual(expected);
  });

  it('should handle fetchMoviess', () => {
    let state = moviesReducer(
      undefined,
      fetchGroupMovies.pending('', { payload: { groupId: 'TESTING_ID' } })
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'LOADING',
        error: null,
        entities: {}
      } as MoviesState)
    );

    state = moviesReducer(
      state,
      fetchGroupMovies.fulfilled([{ id: 1 }], '', { payload: { groupId: 'TESTING_ID' } })
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'LOADED',
        error: null
      } as MoviesState)
    );

    state = moviesReducer(
      state,
      fetchGroupMovies.rejected(new Error('Uh oh'), '', { payload: { groupId: 'TESTING_ID' } })
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'ERROR',
        error: 'Uh oh',
        ids: [],
        entities: {}
      })
    );
  });
});
