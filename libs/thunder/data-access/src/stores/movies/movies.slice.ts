/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { getAllMovies, getExistingMoviesBySearch, removeMovieById } from '../../lib/movies';
import { addMovieToGroup } from '../../lib/group';

import { ApiMovieModel } from '../../types';
import { MoviesEntity, MoviesState } from '@v-thomas/thunder/types';

export const MOVIES_FEATURE_KEY = 'movies';

export const moviesAdapter = createEntityAdapter<MoviesEntity>();

export const fetchGroupMovies = createAsyncThunk(
  'movies/fetchStatus',
  async (action: { payload: { groupId: string; clearMovies?: boolean } }, thunkAPI) => {
    const { groupId } = action.payload;
    const [movies, error] = await getAllMovies(groupId);
    return error ? thunkAPI.rejectWithValue(error.toString()) : movies;
  }
);

export const AddMovie = createAsyncThunk(
  'movies/addMovie',
  async (action: { payload: { movie: ApiMovieModel; groupId: string } }, thunk: any) => {
    const { movie, groupId } = action.payload;
    const [movies, error] = await addMovieToGroup(movie, groupId);
    if (error) return thunk.rejectWithValue(error);
    return movies;
  }
);
export const removeMovie = createAsyncThunk(
  'movies/removeMovie',
  async (action: { payload: { movieId: number; groupId: string } }, thunk) => {
    const { movieId, groupId } = action.payload;
    const [movies, error] = await removeMovieById(movieId, groupId);
    if (error) return thunk.rejectWithValue(error);
    return movies;
  }
);

export const getMovieBySearch = createAsyncThunk(
  'movie/bySearch',
  async (
    action: { payload: { text: string; groupId: string } },
    thunk: any
  ): Promise<MoviesEntity[] | unknown> => {
    if (action.payload.text.length) {
      const [movies, error]: unknown[] = await getExistingMoviesBySearch(
        action.payload.groupId,
        action.payload.text
      );
      if (error) return thunk.rejectWithValue(error);
      return movies;
    }
    return {};
  }
);

export const initialMoviesState: MoviesState = moviesAdapter.getInitialState({
  loadingStatus: 'NOT_LOADED',
  error: null,
  groupId: null
});

export const moviesSlice = createSlice({
  name: MOVIES_FEATURE_KEY,
  initialState: initialMoviesState,
  reducers: {
    clearMovies: (state: any) => {
      state.ids = [];
      state.groupId = null;
      state.entities = {};
      state.error = null;
      state.loadingStatus = 'NOT_LOADED';
    }
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchGroupMovies.pending, (state: MoviesState) => {
        if (Object.keys(state.entities).length === 0 && state.ids.length === 0)
          state.loadingStatus = 'LOADING';
        state.error = null;
      })
      .addCase(fetchGroupMovies.fulfilled, (state: MoviesState, action: PayloadAction<MoviesEntity[]>) => {
        const groupId = window.location.pathname.split('/')[3];
        state.loadingStatus = 'LOADED';
        if (groupId && action.payload) moviesAdapter.setAll(state || initialMoviesState, action.payload);
      })
      .addCase(fetchGroupMovies.rejected, (state: MoviesState, action: any) => {
        state.loadingStatus = 'ERROR';
        state.error = action?.error?.message || null;
      });

    builder
      .addCase(AddMovie.pending, (state: MoviesState) => {
        state.loadingStatus = 'LOADING';
      })
      .addCase(AddMovie.fulfilled, (state: MoviesState, action: PayloadAction<MoviesEntity>) => {
        moviesAdapter.addOne(state, action.payload);
        state.loadingStatus = 'LOADED';
      })
      .addCase(AddMovie.rejected, (state: MoviesState, action: any) => {
        state.loadingStatus = 'ERROR';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        state.error = action.error.message;
      });
    builder
      .addCase(removeMovie.pending, (state: MoviesState) => {
        state.loadingStatus = 'LOADING';
      })
      .addCase(removeMovie.fulfilled, (state: MoviesState, action: PayloadAction<MoviesEntity>) => {
        moviesAdapter.removeOne(state, action.payload.id);
        state.loadingStatus = 'LOADED';
      })
      .addCase(removeMovie.rejected, (state: MoviesState, action: any) => {
        state.loadingStatus = 'ERROR';

        state.error = action.error.message;
      });
    builder.addCase(getMovieBySearch.fulfilled, (state: MoviesState, action: PayloadAction<any>) => {
      if (action.payload) {
        const ids = Object.values(action.payload).map((v: any) => v.id);
        const movies: any = {};
        action.payload.forEach((value: { id: string }) => {
          movies[value.id] = value;
        });
        return {
          ...state,
          entities: movies,
          ids
        };
      }
      return state;
    });
  }
});

export const moviesReducer = moviesSlice.reducer;

export const { clearMovies } = moviesSlice.actions;

const { selectAll, selectEntities } = moviesAdapter.getSelectors();

export const getMoviesState = (rootState: Record<string, MoviesState>): MoviesState =>
  rootState[MOVIES_FEATURE_KEY];

export const selectAllMovies: any = createSelector(getMoviesState, selectAll);

export const selectMoviesEntities: any = createSelector(getMoviesState, selectEntities);
