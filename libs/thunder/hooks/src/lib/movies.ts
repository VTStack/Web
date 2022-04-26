import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ApiMovieModel } from '@v-thomas/thunder/data-access';
import {
  AddMovie,
  clearMovies,
  fetchGroupMovies,
  getMoviesState,
  selectAllMovies,
  getMovieRecommendations as getMovieRecommendationsAction
} from '@v-thomas/thunder/data-access';

import { MoviesEntity, MoviesState } from '@v-thomas/thunder/types';

export const useMovies = (
  all?: boolean
): {
  movies: MoviesEntity[];
  clearMovies: () => void;
  movieState?: MoviesState;
  addMovie: (movie: ApiMovieModel) => void;
  getMovieRecommendations: (searchString?: string) => Promise<any[]>;
  forceFetchMovies: () => void;
} => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { groupId }: any = useParams();

  const dispatch = useDispatch<any>();
  const rootMovies = useSelector(getMoviesState);
  const movies: MoviesEntity[] = useSelector(selectAllMovies);

  const checkgroupMovies = useCallback(() => {
    if (rootMovies.groupId !== groupId && rootMovies.loadingStatus === 'NOT_LOADED')
      dispatch(fetchGroupMovies({ payload: { groupId } }));
  }, [groupId, rootMovies, dispatch]);

  const addMovie = (movie: ApiMovieModel) => {
    dispatch(AddMovie({ payload: { movie, groupId } }));
  };

  const forceFetchMovies = () => {
    dispatch(fetchGroupMovies({ payload: { groupId } }));
  };

  const getMovieRecommendations = async (searchString?: string) => {
    return await getMovieRecommendationsAction(groupId, searchString);
  };

  useEffect(checkgroupMovies, [checkgroupMovies]);

  return {
    movies,
    addMovie,
    clearMovies: () => dispatch(clearMovies()),
    movieState: rootMovies,
    getMovieRecommendations,
    forceFetchMovies
  };
};
